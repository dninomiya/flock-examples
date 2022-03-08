# 実装手順

1. SendGridでアカウントを作成
2. [ドメイン認証](https://docs.sendgrid.com/ja/ui/account-and-settings/how-to-set-up-domain-authentication)を行う。独自ドメインがない場合[送信者を設定](https://docs.sendgrid.com/ui/sending-email/sender-verification)する
3. SendGridダッシュボードで[APIキーを作成&取得](https://app.sendgrid.com/guide/integrate/langs/nodejs)する
4. [ダイナミックテンプレートを作成](https://mc.sendgrid.com/dynamic-templates)する
5. メールを送信する

メール送信の際にダイナミックテンプレートに値を渡すことができます。このサンプルではテンプレート内で名前の部分を

```
ようこそ {{name}} さん
```

としてしています。APIで送信する際に入力された名前を `name` に渡すことでテンプレートの文字を送信対象ごとに差し替えています。

# 実際の利用における注意点

このデモのようにAPIに送信先と名前を渡せば誰でもメール送信できてしまう状態はセキュリティ的にリスクがあるので避けましょう。

実際には以下のアプローチをお勧めします。

- API認証等でログインしているユーザーからのリクエストであることを担保する
- ログインしているユーザーのメールアドレスをAPI側で取得して送信対象とする（送信先のメールアドレスをユーザーに入力させない）