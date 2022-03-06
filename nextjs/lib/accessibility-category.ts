import { Category } from '../types/category';

export const AccessibilityCategory: Category = {
  title: 'アクセシビリティ',
  features: [
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
    },
    {
      id: 'translate',
      title: '多言語対応',
    },
  ],
};
