import {
  EmailAuthProvider,
  isSignInWithEmailLink,
  linkWithCredential,
  signInWithEmailLink,
  updatePassword,
} from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { useAuth } from '../context/auth';
import { auth } from '../firebase/client';

type FormValue = {
  password: string;
};

const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({
    mode: 'onChange',
  });

  const { firebaseUser } = useAuth();
  const router = useRouter();

  const submit = ({ password }: FormValue) => {
    if (firebaseUser) {
      updatePassword(firebaseUser, password)
        .then(() => {
          router.push({
            query: {
              id: router.query.id,
              view: 'login',
            },
          });
          alert('パスワードの設定が完了しました');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('メールアドレスを入力してください');
      }

      if (!email) {
        return;
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem('emailForSignIn');
        })
        .catch((error) => {});
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <h2>パスワード設定</h2>
      <div>
        <label>
          <span className="block">パスワード</span>
          <input
            required
            className="bg-transparent rounded"
            {...register('password', {
              required: '必須入力です',
              validate: (value) =>
                validator.isStrongPassword(value) || '脆弱なパスワードです',
            })}
            type="password"
            autoComplete="new-password"
          />
        </label>
        <p className="text-sm mt-1 opacity-60">
          大文字小文字の半角英数字と数字記号を含む8文字以上
        </p>
        {errors.password && (
          <p className="text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>
      <button
        disabled={!isValid}
        className="rounded border px-3 py-2 disabled:opacity-30"
      >
        パスワード設定
      </button>

      <p className="dark:text-gray-400 text-gray-700 mt-6">
        アカウントをお持ちの方は
        <Link
          href={{
            query: {
              id: router.query.id,
              view: 'login',
            },
          }}
          replace
          shallow
        >
          <a className="text-pink-500">ログイン</a>
        </Link>
      </p>
    </form>
  );
};

export default PasswordForm;
