import React from 'react';
import { useRequireAuth } from '../lib/require-auth';

const AuthGuard = () => {
  // NOTE: デモが見れなくなるためコメントアウトしています
  // NOTE: 実際にはコメントアウトを外して使用してください
  // const { firebaseUser } = useRequireAuth();

  // if (!firebaseUser) {
  //   return null;
  // }

  return (
    <div>
      <p>ログインユーザーしか見れないページです</p>
    </div>
  );
};

export default AuthGuard;
