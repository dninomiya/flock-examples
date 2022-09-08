# 記事の装飾

Tailwind CSS のプラグインにより `prose prose-pre:p-0 dark:prose-invert prose-a:text-pink-600` でダークモード対応を含む記事の装飾が完了しています。`prose-xxx` とすることで記事内の特定の要素についてスタイルを[カスタマイズ](https://tailwindcss.com/docs/typography-plugin#element-modifiers)しています。

# 要素のカスタマイズ

`components` の[オプション](https://github.com/remarkjs/react-markdown#props)を使って画像やリンク、コードブロックなどの見た目や挙動をカスタマイズしています。

# オリジナル要素の追加

`remarkDirective` と `remarkDirectiveRehype` により以下の構文でオリジナル要素を追加しています。オリジナル要素は前述した `components` で見た目や挙動をカスタマイズしています。

```
:::info
特殊ブロック
:::
```

# コードのハイライト

`react-syntax-highlighter` によりコードのハイライトを行っています。必要な言語やテーマをインポートする必要がある点に注意してください。また、言語をJSで分解することでファイル名の表現に対応しています。

``````
```js:ファイル名.js
const demo = 111;
```
``````