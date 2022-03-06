import { Category } from '../types/category';

export const InstallationCategory: Category = {
  title: '環境構築',
  features: [
    {
      title: 'Next.js インストール',
      id: 'installation-nextjs',
      sources: [],
      docs: [
        {
          title: 'Getting Started',
          url: 'https://nextjs.org/docs/getting-started#automatic-setup',
        },
      ],
    },
    {
      title: 'Tailwind CSS インストール',
      id: 'installation-tailwindcss',
      sources: [],
    },
    {
      title: 'Firebase 連携',
      id: 'connect-firebase',
      sources: ['firebase/client.ts', 'firebase/server.ts'],
      libraries: [
        {
          title: 'firebase',
          url: 'https://www.npmjs.com/package/firebase',
        },
        {
          title: 'firebase-admin',
          url: 'https://www.npmjs.com/package/firebase-admin',
        },
      ],
      docs: [
        {
          title: 'Firebase を JavaScript プロジェクトに追加する',
          url: 'https://firebase.google.com/docs/web/setup?hl=ja',
        },
        {
          title: 'サーバーに Firebase Admin SDK を追加する',
          url: 'https://firebase.google.com/docs/admin/setup?hl=ja',
        },
        {
          title: 'Environment Variables',
          url: 'https://nextjs.org/docs/basic-features/environment-variables',
        },
      ],
    },
    {
      title: 'Firebase 初期化',
      id: 'installation-firebase',
      sources: [],
      docs: [
        {
          title: 'はじめに: 最初の関数の記述、テスト、デプロイ',
          url: 'https://firebase.google.com/docs/functions/get-started?hl=ja',
        },
      ],
    },
  ],
};
