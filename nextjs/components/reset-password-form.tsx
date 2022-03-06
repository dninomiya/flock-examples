import { sendPasswordResetEmail } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { auth } from '../firebase/client';

type FormValue = {
  email: string;
};

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({
    mode: 'onChange',
  });

  const router = useRouter();

  const submit = ({ email }: FormValue) => {
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        '再設定用のメールを送信しました。メールのリンクをクリックしてください。';
        router.push({
          query: {
            id: router.query.id,
            view: 'login',
          },
        });
      })
      .catch(() => {
        alert('該当するアカウントは存在しませんでした。');
      });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1 className="mb-4 font-bold text-lg">パスワード再設定</h1>
      <p className="mb-4">
        登録したメールアドレスにパスワード再設定用のリンクを送信します。
      </p>
      <label>
        <p>メールアドレス</p>
        <input
          required
          className="bg-transparent rounded"
          type="email"
          {...register('email', {
            required: '必須入力です',
            validate: (value) => validator.isEmail(value) || '不正な形式です',
          })}
          autoComplete="email"
        />
      </label>
      {errors.email && (
        <p className="text-red-500 mt-1">{errors.email.message}</p>
      )}

      <div>
        <button
          disabled={!isValid}
          className="rounded border mt-4 px-3 py-2 disabled:opacity-30"
        >
          送信
        </button>
      </div>

      <div className="dark:text-gray-400 text-gray-700 mt-6">
        <p>
          パスワードがわかる方は
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
    </form>
  );
};

export default ResetPasswordForm;
