# 実装手順

1. [Favicon Generator](https://realfavicongenerator.net/) で favicon と関連するタグ、Webmanifestを作成
2. 上記一式を `public/favicon` に設置
3. Favicon用のタグをまとめたコンポーネントを作成
4. `pages/_document.tsx` にFaviconコンポーネントを設置

# Tips: 開発時に Favicon を切り替える

本コードでは `process.env` を使って開発中であれば開発用の favicon（🚧） を表示しています。本番環境のURLを同時に開いている場合しばしば変更が反映されていないと勘違いすることがありますがこれにより混乱を防ぐことができます。

