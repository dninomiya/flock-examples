import { Category } from '../types/category';

export const UiCategory: Category = {
  title: 'UI',
  items: [
    {
      id: 'page-loading',
      title: 'ページローディング',
      sources: ['demos/page-loading.tsx'],
      libraries: [
        {
          title: 'nextjs-progressbar',
          url: 'https://www.npmjs.com/package/nextjs-progressbar',
        },
      ],
      docs: [
        {
          title: 'nextjs-progressbar',
          url: 'https://www.npmjs.com/package/nextjs-progressbar',
        },
      ],
    },
    {
      id: 'loading',
      title: 'ローディング',
      sources: ['demos/loading.tsx'],
      docs: [
        {
          title: 'ステートフックの利用法',
          url: 'https://ja.reactjs.org/docs/hooks-state.html',
        },
      ],
    },
    {
      id: 'carousel',
      title: 'カルーセル',
      sources: ['demos/carousel.tsx'],
      libraries: [
        {
          title: 'swiper',
          url: 'https://www.npmjs.com/package/swiper',
        },
      ],
      docs: [
        {
          title: 'Swiper API',
          url: 'https://swiperjs.com/swiper-api',
        },
        {
          title: 'Swiper React Components',
          url: 'https://swiperjs.com/react',
        },
      ],
    },
    {
      id: 'toast',
      title: '通知',
      sources: ['demos/toast.tsx', 'pages/_app.tsx'],
      libraries: [
        {
          title: 'react-hot-toast',
          url: 'https://www.npmjs.com/package/react-hot-toast',
        },
      ],
      docs: [
        {
          title: 'react-hot-toast',
          url: 'https://react-hot-toast.com/',
        },
      ],
    },
    {
      id: 'icon',
      title: 'アイコン',
      sources: ['demos/icon.tsx'],
      libraries: [
        {
          title: 'react-icons',
          url: 'https://www.npmjs.com/package/react-icons',
        },
      ],
      docs: [
        {
          title: 'React Icons',
          url: 'https://react-icons.github.io/react-icons/',
        },
      ],
    },
    {
      id: 'hotkey',
      title: 'ホットキー（ショートカット）',
      sources: ['demos/hotkey.tsx'],
    },
    {
      id: 'date-format',
      title: '日時',
      sources: ['demos/date-format.tsx'],
      libraries: [
        {
          title: 'date-fns',
          url: 'https://www.npmjs.com/package/date-fns',
        },
      ],
      docs: [
        {
          title: 'date-fns',
          url: 'https://date-fns.org/',
        },
      ],
    },
    {
      id: 'sound',
      title: '操作音、通知音',
      sources: ['demos/sound.tsx'],
      libraries: [
        {
          title: 'use-sound',
          url: 'https://www.npmjs.com/package/use-sound',
        },
        {
          title: 'react-siriwave',
          url: 'https://www.npmjs.com/package/react-siriwave',
        },
      ],
      docs: [
        {
          title: 'use-sound',
          url: 'https://www.npmjs.com/package/use-sound',
        },
        {
          title: 'howler.js',
          url: 'https://github.com/goldfire/howler.js#documentation',
        },
      ],
    },
    {
      id: 'clipboard',
      title: 'クリップボード',
      sources: ['demos/clipboard.tsx'],
      libraries: [
        {
          title: 'react-copy-to-clipboard',
          url: 'https://www.npmjs.com/package/react-copy-to-clipboard',
        },
      ],
      docs: [
        {
          title: 'react-copy-to-clipboard',
          url: 'https://www.npmjs.com/package/react-copy-to-clipboard',
        },
      ],
    },
    {
      id: 'code-highlight',
      title: 'シンタックスハイライト',
      sources: ['demos/code-highlight.tsx'],
      libraries: [
        {
          title: 'React Syntax Highlighter',
          url: 'https://www.npmjs.com/package/react-syntax-highlighter',
        },
      ],
      docs: [
        {
          title: 'React Syntax Highlighter',
          url: 'https://www.npmjs.com/package/react-syntax-highlighter',
        },
        {
          title: 'Prism',
          url: 'https://prismjs.com/',
        },
      ],
    },
    {
      id: 'markdown-render',
      title: 'マークダウンレンダー',
      sources: [
        'demos/markdown-render.tsx',
        'components/doc-alert.tsx',
        'components/doc-heading.tsx',
      ],
      libraries: [
        {
          title: 'react-markdown',
          url: 'https://www.npmjs.com/package/react-markdown',
        },
        {
          title: 'react-syntax-highlighter',
          url: 'https://www.npmjs.com/package/react-syntax-highlighter',
        },
        {
          title: 'rehype-slug',
          url: 'https://www.npmjs.com/package/rehype-slug',
        },
        {
          title: 'remark-breaks',
          url: 'https://www.npmjs.com/package/remark-breaks',
        },
        {
          title: 'remark-directive',
          url: 'https://www.npmjs.com/package/remark-directive',
        },
        {
          title: 'remark-directive-rehype',
          url: 'https://www.npmjs.com/package/remark-directive-rehype',
        },
        {
          title: 'remark-gfm',
          url: 'https://www.npmjs.com/package/remark-gfm',
        },
        {
          title: 'rehype-autolink-headings',
          url: 'https://www.npmjs.com/package/rehype-autolink-headings',
        },
        {
          title: '@tailwindcss/typography',
          url: 'https://www.npmjs.com/package/@tailwindcss/typography',
        },
      ],
      docs: [
        {
          title: '',
          url: 'https://github.com/remarkjs/react-markdown',
        },
        {
          title: '',
          url: 'https://tailwindcss.com/docs/typography-plugin',
        },
      ],
    },
    {
      id: 'emoji',
      title: '絵文字',
      sources: ['demos/emoji.tsx'],
      libraries: [
        {
          title: 'emoji-mart',
          url: 'https://github.com/missive/emoji-mart',
        },
      ],
      docs: [
        {
          title: '',
          url: 'https://github.com/missive/emoji-mart',
        },
      ],
    },
    {
      id: 'breadcrumbs',
      title: 'パンくず',
      sources: ['demos/breadcrumbs.tsx', 'components/breadcrumbs.tsx'],
    },
    {
      id: 'dropzone',
      title: 'ドロップゾーン',
      sources: ['demos/dropzone.tsx'],
      libraries: [
        {
          title: 'react-dropzone',
          url: 'https://www.npmjs.com/package/react-dropzone',
        },
      ],
      docs: [
        {
          title: '',
          url: 'https://react-dropzone.js.org/',
        },
      ],
    },
    {
      id: 'tab',
      title: 'タブ',
      sources: ['demos/tab.tsx'],
    },
    {
      id: 'virtual-scroll',
      title: 'バーチャルスクロール',
      ready: true,
    },
    {
      id: 'chart',
      title: 'チャート',
      ready: true,
    },
    {
      id: 'smooth-scroll',
      title: 'スムーススクロール',
      ready: true,
    },
    {
      id: 'rich-link',
      title: 'リッチリンク',
      ready: true,
    },
    {
      id: 'modal',
      title: 'モーダル',
      ready: true,
    },
    {
      id: 'google-map',
      title: 'Google マップ',
      ready: true,
    },
    {
      id: 'tooltip',
      title: 'ツールチップ',
      ready: true,
    },
    {
      id: 'disclosure',
      title: 'ディスクロージャー',
      ready: true,
    },
    {
      id: '3d',
      title: '3D',
      ready: true,
    },
    {
      id: 'more',
      title: 'もっと読み込む',
      ready: true,
    },
    {
      id: 'ar',
      title: 'AR',
      ready: true,
    },
    {
      id: 'parallax',
      title: 'パララックス',
      ready: true,
    },
    {
      id: 'svg-animation',
      title: 'SVGアニメーション',
      ready: true,
    },
    {
      id: 'push-notification',
      title: 'プッシュ通知',
      ready: true,
    },
    {
      id: 'side-nav',
      title: 'サイドナビゲーション',
      ready: true,
    },
    {
      id: 'calendar',
      title: 'カレンダー',
      ready: true,
    },
    {
      id: 'sort',
      title: 'ソート',
      ready: true,
    },
    {
      id: 'drag-drop',
      title: 'ドラッグ&ドロップ',
      ready: true,
    },
    {
      id: 'responsive',
      title: 'レスポンシブ',
      ready: true,
    },
  ],
};
