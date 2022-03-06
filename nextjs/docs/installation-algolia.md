[Algolia](https://www.algolia.com) でアカウントとアプリケーションを作成してください。

Algolia ダッシュボードのアプリケーションの設定画面から **Application ID** と **Search-Only API Key** を取得してNext.jsの[環境変数](https://nextjs.org/docs/basic-features/environment-variables)にセットしてください。これらは公開されても良い情報なので環境変数を使わず直接記述することも可能です。

`searchClient` を使ってアプリケーション内からAlgoliaプロジェクトにアクセスできるようになります。