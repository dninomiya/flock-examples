# 1. SlackにGitHubを追加

[インストール](https://slack.com/intl/ja-jp/help/articles/232289568)

この作業はSlack管理者が行うもので、追加済みの場合特に作業は不要です。追加状況はSlackにGitHubというユーザーがいるかどうかで判断できます。

# 2. 通知を流したいチャンネルで以下のコマンドを入力

チャンネルのコメント欄で入力してください。

```
/github subscribe <自分のリポジトリURL> reviews comments
```

```example
/github subscribe https://github.com/deerboy/demo reviews comments
```

:::notice
クローン用のURLではなく、リポジトリのURLを使ってください。（リポジトリトップのURL）
:::

コメントがコードブロックになっていないことを確認してください。下記の状態だと**ダメです**。コードブロックボタンをクリックして通常のテキストに戻して投稿してください。

![](https://firebasestorage.googleapis.com/v0/b/tml-prod-74d27.appspot.com/o/lesson%2F1576113525530?alt=media&token=656747a5-51e0-43db-8c81-234e1a745f7e)

投稿すると以下のボタンが表示されるので、表示されたらその後の画面に進んで通知を流したいリポジトリ（もしくはすべて）を選択してください。

![](https://firebasestorage.googleapis.com/v0/b/tml-prod-74d27.appspot.com/o/lesson%2F1576113377618?alt=media&token=7aefb128-4a65-46b6-ad01-7658c3ebddcf "未接続の場合")

Connectが終わったら再度コマンドを入力する必要があります。以下のようなメッセージが表示されたら正常に連携されています。

![](https://firebasestorage.googleapis.com/v0/b/tml-prod-74d27.appspot.com/o/lesson%2F1576288748723?alt=media&token=49cbc899-0366-4fb0-9deb-a8bdf2d65442)

これにより、Issueやプッシュのログが表示されるようになります。

![](https://firebasestorage.googleapis.com/v0/b/tml-prod-74d27.appspot.com/o/lesson%2F1576288815382?alt=media&token=46125d2d-f781-4ed4-8a6c-2d7cd62f569b "ログの例")

:::info
他にもさまざまな情報を取得することができます。（[詳細](https://github.com/integrations/slack#configuration)）
:::

# IssueにまつわるコメントはIssueで行う

これまでの対応でSlackのチャンネルに通知が来るようになります。基本的にIssueにまつわるやりとりはSlackではなくIssueで行います。これにより後から入ったメンバーがそのIssueにまつわる動きを追いやすくなります。Slackや他のチャットツールでやりとりされると状況が追えなくなる。

![](https://firebasestorage.googleapis.com/v0/b/tml-prod-74d27.appspot.com/o/lesson%2F1576723907776?alt=media&token=7be21488-fc43-4072-bd7f-3efe1a819b1d "このような通知がきます")