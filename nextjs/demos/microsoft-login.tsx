import React from 'react';
import { OAuthProvider, signInWithPopup } from 'firebase/auth';
import { SiMicrosoft } from 'react-icons/si';
import { auth } from '../firebase/client';

const MicrosoftLogin = () => {
  const login = () => {
    const provider = new OAuthProvider('microsoft.com');

    signInWithPopup(auth, provider)
      .then(() => {
        alert('ログインしました');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/account-exists-with-different-credential':
            return alert('同じメールアドレスのアカウントが既に存在します');
        }
      });
  };

  return (
    <div>
      <button
        onClick={login}
        className="text-white bg-[#5E5E5E] px-4 py-2 rounded flex items-center space-x-2 shadow"
      >
        <SiMicrosoft />
        <span>Microsoft でログイン</span>
      </button>
    </div>
  );
};

export default MicrosoftLogin;
