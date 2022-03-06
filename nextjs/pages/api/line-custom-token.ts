import type { NextApiRequest, NextApiResponse } from 'next';
import { adminAuth, adminDB } from '../../firebase/server';
import fetch from 'node-fetch';
import { Site } from '../../lib/site';

type LineUser = {
  sub: string;
  name: string;
  picture: string;
};

const getIdToken = async (code: string) => {
  const res = await fetch('https://api.line.me/oauth2/v2.1/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      redirect_uri: `${Site.origin}/line-login`,
      client_id: process.env.NEXT_PUBLIC_LINE_CLIENT_ID as string,
      client_secret: process.env.LINE_CHANNEL_SECRET as string,
      code,
    }),
  });

  const { id_token } = (await res.json()) as {
    id_token: string;
  };

  return id_token;
};

const getUserData = async (idToken: string) => {
  const res = await fetch('https://api.line.me/oauth2/v2.1/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      id_token: idToken,
      client_id: process.env.NEXT_PUBLIC_LINE_CLIENT_ID as string,
    }),
  });

  return (await res.json()) as LineUser;
};

const createUser = async (lineUser: LineUser) => {
  if (!(await adminDB.doc(`users/${lineUser.sub}`).get()).exists) {
    return adminDB.doc(`users/${lineUser.sub}`).set({
      id: lineUser.sub,
      name: lineUser.name,
      photoURL: lineUser.picture,
    });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { state, code } = req.body;

  if (
    state &&
    code &&
    (await adminDB.doc(`lineStates/${state}`).get()).exists
  ) {
    await adminDB.doc(`lineStates/${state}`).delete();

    const idToken = await getIdToken(code as string);
    const userData = await getUserData(idToken);

    await createUser(userData);

    const customToken = await adminAuth.createCustomToken(userData.sub);
    return res.status(200).send(customToken);
  }

  res.status(500).send({ error: 'LINEログインに失敗しました' });
};

export default handler;
