import { Category } from '../types/category';

export const SeoCategory: Category = {
  title: 'SEO',
  features: [
    {
      id: 'meta',
      title: 'メタ、OGP',
      sources: ['demos/meta.tsx', 'pages/_app.tsx'],
      libraries: [
        {
          title: 'Next SEO',
          url: 'https://www.npmjs.com/package/next-seo',
        },
      ],
      docs: [
        {
          title: 'Next SEO',
          url: 'https://www.npmjs.com/package/next-seo',
        },
      ],
    },
    {
      id: 'favicon',
      title: 'Favicon',
      sources: [
        'components/favicon.tsx',
        'pages/_document.tsx',
        'public/favicon/favicon-dev.svg',
      ],
    },
    {
      id: 'sitemap',
      title: 'サイトマップ',
      sources: ['next-sitemap.js', 'package.json'],
      libraries: [
        {
          title: 'next-sitemap',
          url: 'https://www.npmjs.com/package/next-sitemap',
        },
      ],
      docs: [
        {
          title: '',
          url: 'https://github.com/iamvishnusankar/next-sitemap',
        },
      ],
    },
    {
      id: 'ga-events',
      title: 'GAイベント計測',
      sources: ['demos/ga-events.tsx'],
      libraries: [
        {
          title: 'firebase',
          url: 'https://www.npmjs.com/package/firebase',
        },
      ],
      docs: [
        {
          title: '',
          url: 'https://firebase.google.com/docs/analytics/events?hl=ja&platform=web',
        },
        {
          title: '',
          url: 'https://firebase.google.com/docs/analytics/debugview?hl=ja',
        },
      ],
    },
    {
      id: 'custom-domain',
      title: '独自ドメイン',
      sources: [],
      docs: [
        {
          title: '',
          url: 'https://domains.google/intl/ja_jp/',
        },
        {
          title: '',
          url: 'https://vercel.com/docs/concepts/projects/custom-domains',
        },
      ],
    },
    {
      id: 'search-console',
      title: 'Search Console',
      sources: ['pages/_document.tsx'],
      docs: [
        {
          title: '',
          url: 'https://developers.google.com/search/docs/beginner/search-console?hl=ja',
        },
      ],
    },
    {
      id: 'ga-api',
      title: 'GA API連携',
    },
  ],
};
