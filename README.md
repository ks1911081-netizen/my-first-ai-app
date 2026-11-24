# AETHER — AIアシスタント

Flask製の日本語AIアシスタントです。ネオンブルーのホログラム風UIと、脈動するAIコアを備えています。Groq APIのモデル一覧から利用可能なチャット用テキストモデルを取得し、OpenAI互換チャット補完エンドポイントで会話します。Whisperなどの音声モデルは選択対象から除外されます。

## 必要なもの

- Python 3.10+
- Groq APIキー（[Groq Console](https://console.groq.com/keys)で発行）

## 起動方法

1. 仮想環境を作成して有効化します。

   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```

   Windows PowerShellの場合:

   ```powershell
   .venv\Scripts\Activate.ps1
   ```

2. 依存パッケージをインストールします。

   ```bash
   pip install -r requirements.txt
   ```

3. `.env.example`を`.env`にコピーし、Groq APIキーを設定します。`.env`はCodespacesなどにあらかじめ設定された同名の環境変数より優先して読み込まれます。

   ```dotenv
   GROQ_API_KEY=your_groq_api_key_here
   ```

   APIキーはソースコードやブラウザー側のファイルに記載しないでください。

4. アプリを起動します。

   ```bash
   python app.py
   ```

5. ブラウザーで <http://127.0.0.1:5000> を開きます。

Groq APIがHTTPエラーを返した場合は、ステータスコードと応答本文の一部をアプリ画面とFlaskのターミナルログに表示します。APIキーそのものはエラー表示・ログに含めません。