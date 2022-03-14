import { Category } from '../types/category';

export const MediaCategory: Category = {
  title: 'メディア',
  items: [
    {
      id: 'music',
      title: 'ミュージックプレイヤー',
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
      id: 'video',
      title: '動画プレイヤー',
      ready: true,
    },
    {
      id: 'youtube-player',
      title: 'YouTubeプレイヤー',
      ready: true,
    },
    {
      id: 'vimeo-player',
      title: 'Vimeoプレイヤー',
      ready: true,
    },
  ],
};
