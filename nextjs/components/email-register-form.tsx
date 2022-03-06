import { sendSignInLinkToEmail } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { auth } from '../firebase/client';

type FormValue = {
  email: string;
};

const EmailRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({
    mode: 'onChange',
  });

  const router = useRouter();

  const submit = ({ email }: FormValue) => {
    return sendSignInLinkToEmail(auth, email, {
      url: window.origin + '/password-login?view=set-password',
      handleCodeInApp: true,
    }).then(() => {
      alert('認証メールを送信しました。メールのリンクをクリックしてください。');
      window.localStorage.setItem('emailForSignIn', email);
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1 className="font-bold text-lg mb-4">アカウント作成</h1>

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
          アカウント作成
        </button>
      </div>

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

export default EmailRegisterForm;
