import React from 'react';
import { HiExternalLink } from 'react-icons/hi';
import ExternalLink from '../components/external-link';
import { Site } from '../lib/site';

const About = () => {
  return (
    <div className="container my-10">
      <div className="prose dark:prose-invert prose-a:text-pink-600">
        <h1>このサイトについて</h1>
        <p>
          Webアプリエンジニアの
          <ExternalLink href={Site.twitter}>nino</ExternalLink>
          がWebアプリにまつわる実装例をまとめたサイトです。Next.js と Tailwind
          CSS と Firebase をベースにしています。少しでもお役に立てれば幸いです。
        </p>

        <h2 id="support">サポート</h2>

        <p>
          Flock Examples
          は無料で公開していますが、モチベーション維持のため以下のいずれか（できればすべて）のサポートをいただけると嬉しいです。TwitterやYouTubeではWebアプリ開発に関する発信を行なっています。
        </p>

        <ul>
          <li>
            <ExternalLink
              href={`https://twitter.com/intent/tweet?text=すげーいいサイト見つけた%0a${Site.origin}`}
            >
              Twitterでシェア
            </ExternalLink>
            する
          </li>
          <li>
            <ExternalLink href={Site.twitter}>Twitter</ExternalLink>
            をフォローする
          </li>
          <li>
            <ExternalLink href={Site.youtube}>YouTube</ExternalLink>
            をチャンネル登録する
          </li>
          <li>
            <ExternalLink href={Site.repository}>リポジトリ</ExternalLink>
            へのスター
          </li>
          <li>
            <ExternalLink href={Site.github}>GitHub</ExternalLink>をフォローする
          </li>
        </ul>

        <h2>コンテンツポリシー</h2>

        <p>
          以下のポリシーで実装例を作成しています。シンプル、クリーン、スタンダード、公式ライクな内容を意識しています。
        </p>

        <ul>
          <li>公式ドキュメントに準拠する。</li>
          <li>信頼性の高いライブラリを採用する。</li>
          <li>自作ライブラリやハッキーなコードを含めない。</li>
        </ul>

        <h2>Q&amp;A</h2>

        <h3>無料ですか？</h3>
        <p>
          はい。UXを重視するため広告をつける予定もありません。モチベーション維持のため
          <a href="#support">サポート</a>していただければ嬉しいです。
        </p>

        <h3>案件に使っても良いですか？</h3>
        <p>ご自由にどうぞ。ただし責任は一切持ちません。</p>

        <h3>
          このサイトをプログラミングスクールの有料商材にしてもいいですか？
        </h3>
        <p>
          <a href="http://mmoloda-msgo.x0.com/image/35263.jpg" rel="noreferrer">
            こちら
          </a>
          をご参照ください。
        </p>

        <h3>教育機関の教材として使用することはできますか？</h3>
        <p>
          未成年や無業者、障害者の方を対象とする職能支援系NPO及び教育機関様は当サイトを講義等で自由にご利用ください。
        </p>

        <h3>コントリビュートしても良いですか？</h3>
        <p>
          誤字修正からバグ対応、リファクタリングまでPRは大歓迎です。ただしすべてマージするとは限らないので仕様変更や機能追加を伴うPRの際には事前にIssue等で提案をいただければと思います。なお、当サイトはOSSではないため予告なく非公開になる可能性があります。あらかじめご了承ください。
        </p>

        <h2>宣伝</h2>

        <p>
          Webアプリ開発のメンターサービス
          <ExternalLink href={Site.flock}>Flock</ExternalLink>
          をやってます。ちゃんとしたWebアプリ（もしくは実績）を作りたい方はご検討ください。
        </p>
      </div>
    </div>
  );
};

export default About;
