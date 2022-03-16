import { Category } from '../types/category';

export const DeployCategory: Category = {
  title: 'デプロイ',
  items: [
    {
      id: 'deploy-vercel',
      title: 'Vercelに公開',
    },
    {
      id: 'deploy-github',
      title: 'GitHub Pagesに公開',
    },
    {
      id: 'deploy-firebase-hosting',
      title: 'Firebase Hostingに公開',
      ready: true,
    },
  ],
};
