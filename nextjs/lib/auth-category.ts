import { Category } from '../types/category';

export const AuthCategory: Category = {
  title: '認証',
  features: [
    {
      id: 'sns-login',
      title: 'SNSログイン',
      sources: ['demos/sns-login.tsx'],
      libraries: [
        {
          title: 'firebase',
          url: 'https://www.npmjs.com/package/firebase',
        },
      ],
      docs: [
        {
          title: 'ウェブサイトで Firebase Authentication を使ってみる',
          url: 'https://firebase.google.com/docs/auth/web/start?hl=ja',
        },
        {
          title: 'JavaScript で Facebook ログインを使用して認証する',
          url: 'https://firebase.google.com/docs/auth/web/facebook-login?authuser=1',
        },
        {
          title: 'JavaScript による GitHub を使用した認証',
          url: 'https://firebase.google.com/docs/auth/web/github-auth?authuser=1',
        },
        {
          title: 'JavaScript で Google ログインを使用して認証する',
          url: 'https://firebase.google.com/docs/auth/web/google-signin?authuser=1',
        },
        {
          title: 'JavaScript による Twitter を使用した認証',
          url: 'https://firebase.google.com/docs/auth/web/twitter-login?authuser=1',
        },
      ],
    },
    {
      id: 'auth-context',
      title: 'ログイン状態管理',
      sources: ['demos/auth-context.tsx', 'context/auth.tsx', 'pages/_app.tsx'],
    },
    {
      id: 'auth-guard',
      title: '認証ガード',
      sources: [
        'demos/auth-guard.tsx',
        'lib/require-auth.ts',
        'context/auth.tsx',
      ],
    },
    {
      id: 'password-login',
      title: 'メール&パスワードログイン',
      sources: [
        'demos/password-login.tsx',
        'components/email-register-form.tsx',
        'components/reset-password-form.tsx',
        'components/password-form.tsx',
        'components/email-password-login-form.tsx',
      ],
    },
    {
      id: 'delete-user',
      title: 'アカウント削除',
      sources: [
        'demos/delete-user.tsx',
        '../firebase/functions/src/delete-user.ts',
      ],
      docs: [
        {
          title: 'ユーザーを削除する',
          url: 'https://firebase.google.com/docs/auth/web/manage-users?hl=ja#delete_a_user',
        },
      ],
    },
    {
      id: 'line-login',
      title: 'LINEログイン',
      sources: ['demos/line-login.tsx', 'pages/api/line-custom-token.ts'],
      docs: [
        {
          title: '',
          url: 'https://developers.line.biz/ja/docs/line-login/integrate-line-login',
        },
        {
          title: '',
          url: 'https://firebase.google.com/docs/auth/web/custom-auth',
        },
      ],
    },
    {
      id: 'apple-login',
      title: 'Appleログイン',
      docs: [
        {
          title: 'JavaScript で Apple を使用して認証する',
          url: 'https://firebase.google.com/docs/auth/web/apple?authuser=1',
        },
      ],
    },
    {
      id: 'microsoft-login',
      title: 'Microsoftログイン',
      docs: [
        {
          title: 'JavaScript による Microsoft を使用した認証',
          url: 'https://firebase.google.com/docs/auth/web/microsoft-oauth?authuser=1',
        },
      ],
    },
    {
      id: 'discord-login',
      title: 'Discordログイン',
    },
    {
      id: 'api-auth-guard',
      title: 'API認証',
    },
  ],
};
