チーム開発の場合、GitHub のIssueやPull Requestの通知をDiscordのチャンネルに送ることで見逃しを防ぐことができます。

# Webhook URLを取得

[Discordのチャンネル設定画面からWebhook URLを作成](https://support.discord.com/hc/ja/articles/228383668-%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB-Webhooks%E3%81%B8%E3%81%AE%E5%BA%8F%E7%AB%A0)してください。

# GitHub リポジトリの設定

1. [GitHubリポジトリの設定画面](https://docs.github.com/ja/get-started/customizing-your-github-workflow/exploring-integrations/about-webhooks)から"Webhook"を選択。
2. 前述したWebhook URLの末尾に`/github`を添えて入力し、Content typeをjsonにする
3. 通知を飛ばしたいアクションにチェックする

以下アクションの例です。通常はIssueやPull Requestとそれらに対するコメントを通知対象として選択すると良いでしょう。

![](https://firebasestorage.googleapis.com/v0/b/tml-prod-74d27.appspot.com/o/lesson%2F1608613040261?alt=media&token=eaea3c50-a032-426c-9b8a-1bc101df472c)