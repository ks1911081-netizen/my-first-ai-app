import os

import requests
from dotenv import load_dotenv
from flask import Flask, jsonify, request, send_from_directory


load_dotenv(override=True)

app = Flask(__name__, static_folder="static")

GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
GROQ_MODELS_URL = "https://api.groq.com/openai/v1/models"
SYSTEM_PROMPT = (
    "あなたは、知的で冷静、少しユーモアのある優秀な英国執事のようなAIアシスタントです。"
    "丁寧で自然な日本語で回答し、ユーザーを「サー」または「ボス」と呼んでください。"
    "簡潔で役立つ回答を心がけ、必要に応じて要点を整理してください。"
)


def select_chat_model(models):
    if not isinstance(models, list):
        raise ValueError("Groqモデル一覧にdata配列がありません")

    excluded_terms = (
        "whisper",
        "audio",
        "speech",
        "transcrib",
        "tts",
        "guard",
        "embed",
        "rerank",
    )
    family_priority = ("llama", "gpt-oss", "qwen")
    candidates = []
    for model in models:
        if not isinstance(model, dict):
            continue
        model_id = model.get("id")
        if not isinstance(model_id, str) or not model_id.strip():
            continue
        normalized_id = model_id.lower()
        if model.get("active") is False or any(
            term in normalized_id for term in excluded_terms
        ):
            continue
        priority = next(
            (
                index
                for index, family in enumerate(family_priority)
                if family in normalized_id
            ),
            len(family_priority),
        )
        candidates.append((priority, normalized_id, model_id))

    if not candidates:
        raise ValueError("利用可能なチャット用テキストモデルが見つかりません")
    return min(candidates)[2]


@app.get("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.post("/api/chat")
def chat():
    api_key = os.environ.get("GROQ_API_KEY", "").strip()
    if not api_key:
        return jsonify(
            {"error": "GROQ_API_KEY が設定されていません。.envファイルにGroq APIキーを設定してください。"}
        ), 503

    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({"error": "JSON形式のリクエストが必要です。"}), 400

    messages = data.get("messages")
    if not isinstance(messages, list) or not messages:
        return jsonify({"error": "会話メッセージを入力してください。"}), 400

    if len(messages) > 40:
        return jsonify({"error": "会話が長すぎます。新しいチャットを始めてください。"}), 400

    validated_messages = []
    for message in messages:
        if (
            not isinstance(message, dict)
            or message.get("role") not in {"user", "assistant"}
            or not isinstance(message.get("content"), str)
            or not message["content"].strip()
        ):
            return jsonify({"error": "会話メッセージの形式が正しくありません。"}), 400
        validated_messages.append(
            {"role": message["role"], "content": message["content"].strip()}
        )

    try:
        models_response = requests.get(
            GROQ_MODELS_URL,
            headers={"Authorization": f"Bearer {api_key}"},
            timeout=15,
        )
    except requests.RequestException as exc:
        app.logger.exception("Groq model list request failed")
        return jsonify({"error": f"Groqのモデル一覧取得に失敗しました: {exc}"}), 502

    if not models_response.ok:
        detail = models_response.text.strip() or models_response.reason or "応答本文がありません"
        detail = detail[:1200]
        message = (
            f"Groqのモデル一覧APIがHTTP {models_response.status_code}を返しました: "
            f"{detail}"
        )
        app.logger.error("%s", message)
        return jsonify({"error": message}), 502

    try:
        model = select_chat_model(models_response.json().get("data"))
    except (ValueError, AttributeError) as exc:
        detail = models_response.text.strip()[:1200] or "応答本文がありません"
        message = f"Groqのモデル一覧を処理できませんでした: {exc}; 応答: {detail}"
        app.logger.error("%s", message)
        return jsonify({"error": message}), 502

    payload = {
        "model": model,
        "messages": [{"role": "system", "content": SYSTEM_PROMPT}, *validated_messages],
        "temperature": 0.7,
    }

    try:
        response = requests.post(
            GROQ_API_URL,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            json=payload,
            timeout=60,
        )
    except requests.RequestException as exc:
        app.logger.exception("Groq API request failed")
        return jsonify({"error": f"Groq APIへの接続に失敗しました: {exc}"}), 502

    if not response.ok:
        detail = response.text.strip() or response.reason or "応答本文がありません"
        detail = detail[:1200]
        message = f"Groq APIがHTTP {response.status_code}を返しました: {detail}"
        app.logger.error("%s", message)
        return jsonify({"error": message}), 502

    try:
        result = response.json()
    except ValueError as exc:
        detail = response.text.strip()[:1200] or "応答本文がありません"
        message = f"Groq APIの応答をJSONとして読み取れませんでした: {exc}; 応答: {detail}"
        app.logger.error("%s", message)
        return jsonify({"error": message}), 502

    try:
        answer = result["choices"][0]["message"]["content"]
        if not isinstance(answer, str) or not answer.strip():
            raise ValueError("応答のchoices[0].message.contentが空か文字列ではありません")
    except (KeyError, IndexError, TypeError, ValueError) as exc:
        detail = response.text.strip()[:1200] or "応答本文がありません"
        message = f"Groq APIの応答形式が想定と異なります: {exc}; 応答: {detail}"
        app.logger.error("%s", message)
        return jsonify({"error": message}), 502

    return jsonify({"reply": answer})


if __name__ == "__main__":
    app.run(debug=os.environ.get("FLASK_DEBUG") == "1")
