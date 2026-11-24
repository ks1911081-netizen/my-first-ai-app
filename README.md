# AETHER — AIアシスタント

Flask製の日本語AIアシスタントです。ネオンブルーのホログラム風UIと、脈動するAIコアを備えています。Groq APIのモデル一覧から利用可能なチャット用テキストモデルを取得し、OpenAI互換チャット補完エンドポイントで会話します。ユーザーを「伊吹様」とお呼びし、Whisperなどの音声モデルは選択対象から除外します。

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

4. 開発環境ではアプリを起動します。

   ```bash
   python app.py
   ```

5. ブラウザーで <http://127.0.0.1:5000> を開きます。

Groq APIがHTTPエラーを返した場合は、ステータスコードと応答本文の一部をアプリ画面とFlaskのターミナルログに表示します。APIキーそのものはエラー表示・ログに含めません。

## Renderへのデプロイ

- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn app:app --bind 0.0.0.0:$PORT`
- RenderのEnvironment Variablesに`GROQ_API_KEY`を登録してください。Flaskアプリも`PORT`環境変数を使用して起動します。

## 会話履歴と長期記憶

- 直近最大20往復分の会話ログはブラウザーの`localStorage`に保存され、同じブラウザー・プロファイルから再訪した際に復元されます。「RESET」は会話履歴だけを消去します。
- 長期記憶もブラウザーの`localStorage`に保存し、チャットごとにバックエンドへ渡してAIの前提知識に加えます。MEMORY BANKから確認・個別削除・全削除ができます。Renderの再起動や再デプロイでは消えません。
- `localStorage`はブラウザー・端末ごとの保存領域です。ブラウザーデータを消去した場合や別端末・別プロファイルでは復元されず、同じブラウザー内での同期にも対応しません。パスワードやAPIキーなどの秘密情報は記憶対象外です。

## Web検索

- ニュースを調べる場合とBRIEFINGでは、Googleニュース日本語RSSから最新記事を最大5件取得してAIに渡します。RSS通信・XML解析の失敗原因はFlaskのターミナルログにも記録します。
- それ以外のWeb調査ではAPIキー不要の`ddgs`でDuckDuckGoを検索します。検索対象ではない一般知識や雑談では検索しません。
- 検索結果を使った回答には、チャット内に検索完了ステータスと参照元リンクを表示します。検索に失敗した場合は状態を表示し、検索結果を捏造しないようAIに伝えます。

## 釧路市の天気とクイックランチャー

- Open-Meteoから北海道釧路市（緯度42.9849、経度144.3814）の現在の天気、気温、風速、当日の最高・最低気温を取得し、HUDに表示します。ブラウザーは5分ごとに更新し、サーバーも同じ時間だけ結果をキャッシュします。
- 取得した気象データはチャットのシステムプロンプトにも含まれます。場所の指定がない天気や服装の質問には釧路の情報を使い、釧路以外はDuckDuckGo検索を行います。
- QUICK PROTOCOLSにはBRIEFING（釧路の天気と日本の主要ニュース）、CODING（GitHub）、GAMING、WATCHINGを配置しています。チャットまたは音声で各プロトコルを呼び出すと、BRIEFINGは報告を行い、残りは新しいタブで対象サイトを開きます。ブラウザーがタブをブロックした場合は、チャットにリンクを表示します。

## 音声読み上げ

- 音声モードでAIが返答すると、`edge-tts`の日本語男性音声`ja-JP-KeitaNeural`を使ってMP3を生成し、ブラウザーで再生します。読み上げ用にMarkdown記法、URL、HUDステータスを整形し、再生中はAIコアが連動します。
- TTSの通信に失敗した場合だけブラウザーの`speechSynthesis`を予備として使います。