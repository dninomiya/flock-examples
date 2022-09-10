import { Category } from '../types/category';

export const OtherCategory: Category = {
  title: '機能',
  items: [
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
          title: 'qrcode.react',
          url: 'https://www.npmjs.com/package/qrcode.react',
        },
      ],
      docs: [
        {
          title: 'qrcode.react',
          url: 'https://www.npmjs.com/package/qrcode.react',
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
      ready: true,
    },
    {
      id: 'google-forms-api',
      title: 'Google Forms API',
      ready: true,
    },
    {
      id: 'rss',
      title: 'RSS',
      ready: true,
    },
  ],
};
