1. GitHubリポジトリにNext.jsアプリをPush
2. [Vercelで上記リポジトリをインポート](https://vercel.com/docs/concepts/git)
3. [Vercelのプロジェクトに環境変数を設定](https://vercel.com/docs/concepts/projects/environment-variables)。必要に応じて本番用とテスト環境用で変数を切りわける
4. 独自ドメインがある場合[設定する](https://vercel.com/docs/concepts/projects/custom-domains)
5. サーバーレス関数のリージョンを"Tokyo, Japan (Northeast) – hnd1"に[設定する](https://vercel.com/docs/concepts/functions/regions)

以後mainブランチにPush、マージがあるたびに自動的にWebアプリが公開されます。

## デプロイがうまくいかない場合

エラーがでてデプロイができない場合、エラーログを確認してエラーの原因を解決した上で再度mainブランチにPushやマージを行なってください。

## モノリポでNext.jsの位置が異なる場合

たとえばリポジトリの中に Firebase と Next.js のアプリが混在している場合、ファイルツリーが以下のようになります。

- Project
  - firebase
  - nextjs

Vercelは main ブランチの更新に合わせて自動でコマンドを実行しますが、たとえば Next.js のビルドを行う場合nextjsの位置でコマンドを実行させる必要があります。こういったケースでは[ルートディレクトリの設定](https://vercel.com/blog/advanced-project-settings)を行います。

上記の例の場合 `nextjs` としてください。あるいはFirebase デプロイも同時に行う場合、ルートディレクトリは変更せず[ビルドコマンドの設定](https://vercel.com/docs/concepts/deployments/build-step)でFirebaseとNext.jsのデプロイを連続して行なってください。

なお、Firebase Cloud Functions のデプロイは**短期間に連続した場合失敗する**ことがあるので自動デプロイに含めず手動でデプロイするアプローチをお勧めします。