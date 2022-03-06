import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import React from 'react';
import EmailPasswordLogin from '../components/email-password-login-form';
import EmailRegisterForm from '../components/email-register-form';
import PasswordForm from '../components/password-form';
import ResetPasswordForm from '../components/reset-password-form';
import { useAuth } from '../context/auth';
import { auth } from '../firebase/client';

const PasswordLogin = () => {
  const { firebaseUser } = useAuth();
  const router = useRouter();
  const view =
    (router.query.view as
      | 'reset-password'
      | 'register'
      | 'login'
      | 'set-password') || 'register';

  return (
    <div>
      {firebaseUser && (
        <p className="p-3 rounded-lg mb-4 bg-black/20 text-sm">
          {firebaseUser.email} でログイン中です。
          <button className="text-pink-500" onClick={() => signOut(auth)}>
            ログアウト
          </button>
        </p>
      )}

      {view === 'register' && <EmailRegisterForm />}
      {view === 'set-password' && <PasswordForm />}
      {view === 'reset-password' && <ResetPasswordForm />}
      {view === 'login' && <EmailPasswordLogin />}
    </div>
  );
};

export default PasswordLogin;
