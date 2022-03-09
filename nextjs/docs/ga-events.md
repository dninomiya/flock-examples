任意のタイミングで以下のコードを記述することでイベントを計測できます。

```tsx
logEvent(ga, 'イベントタイプ', {
  content_type: 'コンテンツの種類',
  id: 'コンテンツのID',
  name: 'コンテンツの名前'
});
```

- イベントタイプやオプションは[ドキュメント](https://developers.google.com/gtagjs/reference/event?hl=ja)を参照してください。
- 計測結果は[イベントダッシュボード](https://console.firebase.google.com/project/_/analytics/events?hl=ja)から確認できます。
- 開発中は[拡張機能](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna?hl=ja)をONにして[デバッグビュー](https://console.firebase.google.com/project/_/analytics/debugview?hl=ja)で確認してください。