# 概要

![](https://firebasestorage.googleapis.com/v0/b/new-flock-prod-5108d.appspot.com/o/docs%2Fvv3W49XtMnnw4G1VJRoC%2F1641977894521.png?alt=media&token=fbba5010-4ec6-4646-8106-505d2bf0dbc2)

インデックス(Indice)はレコードを束ねるリストのことです。たとえば `posts` というインデックスには記事のレコードが連なっています。インデックス管理では

・どの属性を検索対象とするか
・どの属性をタグ、カテゴリなどの絞り込み条件とするか
・どの順番で検索結果を並べるか

を指定します。また、記事レコードが以下の構造である前提で解説を進めます。

```
{
  title: '記事タイトル', // タイトル
  createdAt: 123456789, // 作成日
  public: true, // 公開ステータス
  body: 'xxxxx', // 本文
  category: ['it', 'web'] // カテゴリ
}
```

# インデックスの作成

Algoliaダッシュボードからインデックスを作成できます。開発用のものと本番用のもので分けるためにプレフィックスをつけましょう。また、ソートごとにインデックスを複製することになるので並び順がわかる名前にしましょう。以下に一般的な例を示します。

| インデックス名 | 環境       | 並び順         |
| -------------- | ---------- | -------------- |
| dev_posts_desc | 開発(dev)  | 新しい順(desc) |
| dev_posts_asc  | 開発(dev)  | 古い順(desc)   |
| prod_posts_asc | 開発(prod) | 古い順(desc)   |
| prod_posts_asc | 開発(prod) | 古い順(desc)   |

ソートの基準が複数ある場合、それもインデックス名に含めましょう。たとえばユーザーを誕生日順や作成日順で並べたい場合以下のようになります。

- dev_users_bday_desc
- dev_users_bday_asc
- dev_users_created_asc
- dev_users_created_desc

上記のインデックスの命名はあくまで開発者にとって管理しやすくするための命名規則に過ぎないので開発者にとってわかりやすい名前であれば他の形式でも問題ありません。

# 検索対象の属性を設定

レコードの中でキーワード検索の対象にしたい属性はインデックスに設定する必要があります。Algoliaダッシュボードにて Index>Configuration>Searchable attributes とすすみ、その中で検索対象にしたい属性を設定します。今回は記事タイトルと本文を検索対象としたいので `title` と `body` を設定することになります。設定順序が上にある方が検索結果で優先されるため、 `title` を上にしておくべきでしょう。`unordered` に設定するとこの優先度を無視して結果に反映することができます。

![](https://firebasestorage.googleapis.com/v0/b/new-flock-prod-5108d.appspot.com/o/docs%2F2eCfwbVbEB5zKGn3lre1%2F1644128829489.png?alt=media&token=89a7e501-1538-47bc-8700-6d7b6cb7d4b7)

ここで設定しない属性に対してはキーワード検索が機能しないので気をつけましょう。

# 絞り込みの条件となる属性を設定

Algoliaダッシュボードにて Index>Configuration>Facets とすすみ、絞り込み対象の属性を指定します。今回はカテゴリと公開状態で絞り込みたいので `public` と `category` を指定します。

![](https://firebasestorage.googleapis.com/v0/b/new-flock-prod-5108d.appspot.com/o/docs%2F2eCfwbVbEB5zKGn3lre1%2F1644129059293.png?alt=media&token=3dc0cd35-0af8-4ab2-998a-2382a4971576)

それぞれ以下のようにしてください。

- category - searchable
- public - filter only

オプションは以下の意味を持ちます。

- `searchable` - 属性自体を検索可能にしたい場合
- `not searchable` - 属性自体を検索可能にしないが、画面上にリストアップはしたい場合
- `filter only` - 属性を検索、表示させず検索時の絞り込みのみに利用する場合

たとえばカテゴリが200個ある場合、記事投稿画面のセレクタから該当するカテゴリを探させるのは現実的ではありません。カテゴリ用の入力欄を用意し、カテゴリ名に基づいてカテゴリを絞り込んだ上で選択する方がユーザーに優しいでしょう。そのUIを実装したい場合 `searchable` にする必要があります。

公開ステータスの記事のみを表示するために `public` 属性をフィルターとして使いますが、条件自体を画面に表示する必要はないため `filter only` としています。

# ソート（並び順）の設定

## ソートの設定

ダッシュボードの  Index>Configuration>Ranking and Sorting からソートを設定できます。設定属性の並びが上の方がソート基準として優先されます。

![](https://firebasestorage.googleapis.com/v0/b/new-flock-prod-5108d.appspot.com/o/docs%2F2eCfwbVbEB5zKGn3lre1%2F1644130073103.png?alt=media&token=4863b65e-ec71-443e-a98c-18a70f24025e)

- `Ascending` - 昇順（古い順）
- `Descending` - 降順（新しい順）

となります。

## ソートの切り替え

検索結果のソートはIndex自体に**固定**されます。つまり、 `posts` という記事一覧のインデックスが新しい順であった場合、その並び順自体をUIから動的に変更することは**できません**。

ではどうやって検索結果のソートを切り替えるのでしょうか。答えは並び順の数だけインデックスを複製することです。

たとえば新しい順と古い順の並べ替えをしたい場合、以下の2つのインデックスを持つ必要があります。

- 新しい順のインデックス - posts-latest
- 古い順のインデックス - posts-oldest

インデックスが増えたからといってレコード管理の実装が2倍になるわけではありません。Algoliaには通常のインデックス複製に加え[レプリカ](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas/)と呼ばれる特殊な複製が用意されています。

レプリカは**インデックスのデータは運命共同体的にシェアしつつ、インデックスの設定は各々がもつ**という性質があります。

これによりレコードを2つのインデックスに重複して追加していく必要はなく、レプリカの作成元となるインデックスに追加さえすれば自動的にレプリカである複製されたインデックスからも参照できるようになります。

ソートUIで並び順が変更された際は参照するインデックス自体を変更することでソートが実現します。UIの実装は別の記事で解説します。