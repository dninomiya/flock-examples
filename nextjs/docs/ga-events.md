任意のタイミングで以下のコードを記述することでイベントを計測できます。

```tsx
logEvent(ga, 'イベントタイプ', {
  // パラメータ
});
```

- イベントタイプやパラメータは[ドキュメント](https://support.google.com/firebase/answer/9267735?hl=ja&ref_topic=6317484)を参照してください。
- 計測結果は[イベントダッシュボード](https://console.firebase.google.com/project/_/analytics/events?hl=ja)から確認できます。[事前にイベントを作成](https://www.data-be.at/magazine/ga4-events/)してください。
- 開発中は[拡張機能](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna?hl=ja)をONにして[デバッグビュー](https://console.firebase.google.com/project/_/analytics/debugview?hl=ja)で確認してください。