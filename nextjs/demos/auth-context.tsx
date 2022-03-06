import Link from 'next/link';
import React from 'react';
import { useAuth } from '../context/auth';

const AuthContext = () => {
  const { user, loading, firebaseUser } = useAuth();

  if (loading) {
    return <p>ログインチェック中...</p>;
  }

  if (!firebaseUser) {
    return (
      <p>
        ゲストユーザーです。
        <Link href="/login">
          <a className="text-pink-600">ログイン</a>
        </Link>
        してください
      </p>
    );
  }

  if (user) {
    return (
      <div>
        <p>{user.name} さんようこそ</p>
      </div>
    );
  }

  return <p>ログインしていますがユーザー情報が未登録です。</p>;
};

export default AuthContext;
