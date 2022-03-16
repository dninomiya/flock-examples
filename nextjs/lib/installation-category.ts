import { Category } from '../types/category';

export const InstallationCategory: Category = {
  title: '環境構築',
  items: [
    {
      title: 'Next.js インストール',
      id: 'installation-nextjs',
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
      docs: [
        {
          title: 'はじめに: 最初の関数の記述、テスト、デプロイ',
          url: 'https://firebase.google.com/docs/functions/get-started?hl=ja',
        },
      ],
    },
    {
      id: 'visual-studio-code-settings',
      title: 'Visual Studio Codeの設定',
    },
    {
      title: 'GitHubとDiscordの連携',
      id: 'connect-github-discord',
      docs: [
        {
          title: '',
          url: 'https://docs.github.com/ja/get-started/customizing-your-github-workflow/exploring-integrations/about-webhooks',
        },
      ],
    },
    {
      title: 'GitHubとSlackの連携',
      id: 'connect-github-slack',
      docs: [
        {
          title: '',
          url: 'https://docs.github.com/ja/get-started/customizing-your-github-workflow/exploring-integrations/about-webhooks',
        },
      ],
    },
  ],
};
