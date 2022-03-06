import { signInWithEmailAndPassword } from 'firebase/auth';
import { url } from 'inspector';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { auth } from '../firebase/client';

type FormValue = {
  email: string;
  password: string;
};

const EmailPasswordLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const router = useRouter();

  const submit = ({ email, password }: FormValue) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('ログインしました');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            return alert('不正なメールアドレスです');
          case 'auth/user-disabled':
            return alert('無効なユーザーです');
          case 'auth/user-not-found':
            return alert('該当のユーザーが存在しません');
          case 'auth/wrong-password':
            return alert('パスワードが間違っています');
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="space-y-4">
        <h2>ログイン</h2>
        <div>
          <label>
            <span className="block">メールアドレス</span>
            <input
              required
              className="bg-transparent rounded"
              type="email"
              {...register('email', {
                required: '必須入力です',
              })}
              autoComplete="email"
            />
          </label>
          {errors.email && (
            <p className="text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label>
            <span className="block">パスワード</span>
            <input
              required
              className="bg-transparent rounded"
              {...register('password', {
                required: '必須入力です',
              })}
              type="password"
              autoComplete="current-password"
            />
          </label>
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>
        <button className="rounded border px-3 py-2 disabled:opacity-30">
          ログイン
        </button>
      </form>

      <div className="dark:text-gray-400 text-gray-700 mt-6">
        <p>
          パスワードを忘れた方は
          <Link
            href={{
              query: {
                id: router.query.id,
                view: 'reset-password',
              },
            }}
            replace
            shallow
          >
            <a className="text-pink-500">パスワードを再設定</a>
          </Link>
        </p>
        <p>
          まだアカウントをお持ちでない方は
          <Link
            href={{
              query: {
                id: router.query.id,
                view: 'register',
              },
            }}
            replace
            shallow
          >
            <a className="text-pink-500">アカウント登録</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EmailPasswordLogin;
