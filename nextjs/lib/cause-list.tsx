import { Cause } from '../types/cause';

export const CAUSES: Cause[] = [
  {
    id: 'sns',
    title: 'Twitter風アプリ',
    features: ['SNS'],
    ready: true,
  },
  {
    id: 'marketplace',
    title: 'メルカリ風アプリ',
    features: ['マーケットプレース'],
    ready: true,
  },
  {
    id: 'youtube',
    title: 'YouTube風動画サイト',
    ready: true,
    features: ['ランディングページ'],
  },
  {
    id: 'blog',
    title: 'ブログ',
    ready: true,
    features: ['CMS'],
  },
  {
    id: 'ec',
    title: 'Amazon風ECサイト',
    features: ['EC'],
    ready: true,
  },
  {
    id: 'company',
    title: 'コーポレートサイト',
    features: ['CMS'],
    ready: true,
  },
  {
    id: 'lp',
    title: 'ランディングページ',
    features: ['ランディングページ'],
    ready: true,
  },
  {
    id: 'matching',
    title: 'Tinder風アプリ',
    features: ['マッチング'],
    ready: true,
  },
];
