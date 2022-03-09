Search Console で自分のサイトを登録します。ドメインのDNS設定で所有者証明を行う場合VercelなどのホスティングのDNS設定と競合する場合があるので `<head>` タグに記述するアプローチをお勧めします。

デモコードでは環境変数を使っていますが証明コードは公開されているサイトであれば誰でも確認できるため直接コードしても構いません。

# インデックス登録をリクエストする

検索結果により早くヒットするように[URLを検索エンジンに登録](https://developers.google.com/search/docs/advanced/crawling/ask-google-to-recrawl)します。