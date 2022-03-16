GitHub Pages 標準のURLを使う場合 `next.config.js` に以下を追加します。

```js:next.config.js
// 追加
const REPO_NAME = 'リポジトリ名';

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // 追加
  basePath: process.env.NODE_ENV === 'production' ? '/' + REPO_NAME : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' + REPO_NAME : '',
  trailingSlash: true,
};
```

`.github/workflows/deploy.yml` を作成し、以下の内容を設定

```yml:.github/workflows/deploy.yml
name: Deploy to GitHub Pages

# main ブランチ の push 時にこのワークフローを実行する
on:
 push:
   branches:
     - main

jobs:
 build:
   runs-on: ubuntu-20.04

   steps:
     - name: Checkout
       uses: actions/checkout@v2

     - name: Setup Node
       uses: actions/setup-node@v2
       with:
         node-version: 16.x
         cache: npm

     - name: Install dependencies
       run: npm install

     - name: Build
       run: npm run build

     - name: Deploy
       uses: peaceiris/actions-gh-pages@v3
       with:
         github_token: ${{ secrets.GITHUB_TOKEN }}
         publish_dir: out
```

この状態で一度Pushすると `gh-pages` というブランチが作成されます。
次に、リポジトリ設定画面の `Pages` タブより `gh-pabes` をソースとして設定します。

![](/images/docs/2022-03-17-01-54-26.png)

その後改めて何らかの修正を行い、Pushした際に自動でデプロイ、反映されるようになります。[独自ドメインを設定](https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)することもできます。

