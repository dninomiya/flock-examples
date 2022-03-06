# 全体の流れ

1. [チャネルを作成](https://developers.line.biz/ja/docs/line-login/integrate-line-login/#create-a-channel)
2. [コールバックURLの設定](https://developers.line.biz/ja/docs/line-login/integrate-line-login/#setting-callback-url)（改行区切りで複数設定可能）
3. LINEログイン画面へ遷移
4. 認可コードの取得
5. 認可コードを使ってアクセストークンを取得
6. アクセストークンを使ってLINEユーザーID&ユーザー情報を取得
7. ユーザーデータを使ってユーザーとカスタムトークンを作成
8. カスタムトークンを使ってFirebaseにログイン

LINEからメールアドレスも取得したい場合[メールアドレスの取得権限を申請](https://developers.line.biz/ja/docs/line-login/integrate-line-login/#applying-for-email-permission)し、リクエスト時のスコープ設定を `profile openid email` に設定してください。