パンクずはレイアウトなどに含めて一元管理する方法もありますがページのURLと名前を紐付ける処理が複雑化するケースもあるため、画面単位でパンくず及びそのリストを定義する方が直感的なメンテナンスになります。

レイアウトの構造上一元管理する方が望ましい場合、リストを各画面の `getStaticProps` で生成し、[画面ごとのレイアウト](https://nextjs.org/docs/basic-features/layouts#per-page-layouts)でそれを使うようにしましょう。