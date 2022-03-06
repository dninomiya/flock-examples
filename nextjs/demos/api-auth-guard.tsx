import { getIdToken, signInAnonymously, signOut } from 'firebase/auth';
import React from 'react';
import { useAuth } from '../context/auth';
import { auth } from '../firebase/client';

const ApiAuthGuard = () => {
  const { firebaseUser } = useAuth();
  const validateAPIAuth = async () => {
    const token = auth?.currentUser
      ? await getIdToken(auth.currentUser, true)
      : '';

    fetch('/api/auth-valid', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          const message = await response.text();
          throw new Error(message);
        }
        return response.text();
      })
      .then((message: string) => {
        alert(message);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const login = () => {
    signInAnonymously(auth);
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <button className="px-3 py-2 rounded border" onClick={validateAPIAuth}>
        APIにアクセス
      </button>

      <p className="mt-4">
        {firebaseUser ? (
          <p>
            ログインしています{' '}
            <button className="text-pink-600" onClick={logout}>
              ログアウト
            </button>
          </p>
        ) : (
          <p>
            <button className="text-pink-600" onClick={login}>
              ログイン
            </button>
            してください
          </p>
        )}
      </p>
    </div>
  );
};

export default ApiAuthGuard;
