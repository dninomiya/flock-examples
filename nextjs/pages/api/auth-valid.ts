import { NextApiRequest, NextApiResponse } from 'next';
import { adminAuth } from '../../firebase/server';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization?.split(' ')?.[1] as string;

  try {
    await adminAuth.verifyIdToken(token);
  } catch (error) {
    return res.status(500).send('認証に失敗しました');
  }

  return res.status(200).send('認証に成功しました');
};

export default handler;
