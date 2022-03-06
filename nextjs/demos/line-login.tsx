import { signInWithCustomToken, signOut } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../context/auth';
import { auth, db } from '../firebase/client';
import { Site } from '../lib/site';

const AuthLine = () => {
  const router = useRouter();
  const { user } = useAuth();

  const openLineLoginPage = async () => {
    const stateRef = doc(collection(db, 'lineStates'));
    const state = stateRef.id;

    await setDoc(stateRef, {
      createdAt: Date.now(),
    });

    const url = new URL('https://access.line.me/oauth2/v2.1/authorize');
    url.search = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.NEXT_PUBLIC_LINE_CLIENT_ID as string,
      redirect_uri: `${Site.origin}/line-login`,
      state,
      scope: 'profile openid',
    }).toString();

    location.assign(url);
  };

  useEffect(() => {
    if (router.query.code && router.query.state) {
      fetch('/api/line-custom-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: router.query.code as string,
          state: router.query.state as string,
        }),
      })
        .then((res) => res.text())
        .then((token) => {
          signInWithCustomToken(auth, token).then(() => {
            router.replace(
              {
                query: {
                  id: router.query.id,
                },
              },
              undefined,
              {
                shallow: true,
              }
            );
          });
        });
    }
  }, [router.query.code]);

  return (
    <div>
      <button
        className="bg-[#06c755] px-3 py-2 rounded shadow text-white"
        onClick={openLineLoginPage}
      >
        LINE でログイン
      </button>
      {user && (
        <div className="mt-4">
          <p className="mb-2">ログイン中です</p>

          <div className="flex items-center space-x-4">
            <img
              className="rounded-full w-10 h-10"
              src={user.photoURL}
              alt=""
            />
            <p>{user.name}</p>
            <button className="text-pink-600" onClick={() => signOut(auth)}>
              ログアウト
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthLine;
