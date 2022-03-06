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
    },
    {
      id: 'analytics',
      title: 'Google アナリティクス',
    },
    {
      id: 'custom-domain',
      title: '独自ドメイン',
    },
  ],
};
