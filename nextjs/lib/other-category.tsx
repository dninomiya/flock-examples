import { Category } from '../types/category';

export const OtherCategory: Category = {
  title: '機能',
  features: [
    {
      id: 'custom-component',
      title: 'カスタムコンポーネント',
      sources: ['demos/custom-component.tsx', 'components/button.tsx'],
      docs: [
        {
          title: 'コンポーネントと props',
          url: 'https://ja.reactjs.org/docs/components-and-props.html',
        },
      ],
    },
    {
      id: 'device-detect',
      title: 'デバイス判定',
      sources: ['demos/device-detect.tsx'],
      libraries: [
        {
          title: 'react-device-detect',
          url: 'https://www.npmjs.com/package/react-device-detect',
        },
      ],
      docs: [
        {
          title: 'react-device-detect',
          url: 'https://www.npmjs.com/package/react-device-detect',
        },
      ],
    },
    {
      id: 'qr',
      title: 'QRコード',
      sources: ['demos/qr.tsx'],
      libraries: [
        {
          title: 'react-qr-code',
          url: 'https://www.npmjs.com/package/react-qr-code',
        },
      ],
      docs: [
        {
          title: 'react-qr-code',
          url: 'https://www.npmjs.com/package/react-qr-code',
        },
      ],
    },
    {
      id: 'send-mail',
      title: 'メール送信',
      sources: ['demos/send-mail.tsx', 'pages/api/send-mail.ts'],
      libraries: [
        {
          title: '@sendgrid/mail',
          url: 'https://www.npmjs.com/package/@sendgrid/mail',
        },
      ],
      docs: [
        {
          title: '',
          url: 'https://docs.sendgrid.com/ja/',
        },
      ],
    },
    {
      id: 'mailing-list',
      title: 'メールマガジン配信',
    },
    {
      id: 'rss',
      title: 'RSS',
    },
  ],
};
