import { Category } from '../types/category';

export const CommunityCategory: Category = {
  title: 'コミュニティ',
  items: [
    {
      id: 'like',
      title: 'いいね',
      sources: ['demos/like.tsx'],
      libraries: [
        {
          title: 'データ取得のための React Hooks ライブラリ – SWR',
          url: 'https://swr.vercel.app/ja',
        },
      ],
      docs: [
        {
          title: 'トランザクションとバッチ書き込み',
          url: 'https://firebase.google.com/docs/firestore/manage-data/transactions?hl=ja',
        },
      ],
    },
    {
      id: 'thread',
      title: 'スレッド',
      ready: true,
    },
    {
      id: 'chat',
      title: 'チャット',
      ready: true,
    },
    {
      id: 'online-status',
      title: 'オンラインステータス',
      ready: true,
    },
    {
      id: 'follow',
      title: 'フォロー',
      ready: true,
    },
  ],
};
