type CauseFeature =
  | 'SNS'
  | 'マーケットプレース'
  | 'クラウドソーシング'
  | 'CMS'
  | 'EC'
  | 'ランディングページ'
  | '動画プラットフォーム'
  | 'マッチング';

export type Cause = {
  id: string;
  title: string;
  features: CauseFeature[];
  ready?: true;
};
