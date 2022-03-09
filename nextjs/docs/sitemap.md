1. プロジェクトルートに `next-sitemap.js` を作成（オプションは[ドキュメント](https://github.com/iamvishnusankar/next-sitemap#configuration-options)参照）
2. `package.json` の `scripts` に `"postbuild": "next-sitemap"` を追加。
3. `.gitignore` に以下を追加

```
/public/sitemap*
/public/robots.txt
```