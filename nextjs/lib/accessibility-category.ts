import { Category } from '../types/category';

export const AccessibilityCategory: Category = {
  title: 'アクセシビリティ',
  items: [
    {
      id: 'dark-mode',
      title: 'ダークモード',
      sources: ['demos/dark-mode.tsx', 'pages/_app.tsx'],
      libraries: [
        {
          title: 'next-themes',
          url: 'https://www.npmjs.com/package/next-themes',
        },
      ],
      docs: [
        {
          title: 'next-themes',
          url: 'https://www.npmjs.com/package/next-themes',
        },
      ],
    },
    {
      id: 'accessibility',
      title: 'アクセシビリティ',
      ready: true,
    },
    {
      id: 'translate',
      title: '多言語対応',
      ready: true,
    },
  ],
};
