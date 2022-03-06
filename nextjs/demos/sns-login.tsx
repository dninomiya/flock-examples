import React from 'react';
import { SiFacebook, SiGithub, SiGoogle, SiTwitter } from 'react-icons/si';
import Button from '../components/button';
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase/client';

const Login = () => {
  const loginWithProvider = (
    providerName: 'google' | 'twitter' | 'github' | 'facebook'
  ) => {
    const provider = {
      google: new GoogleAuthProvider(),
      twitter: new TwitterAuthProvider(),
      github: new GithubAuthProvider(),
      facebook: new FacebookAuthProvider(),
    };

    return signInWithPopup(auth, provider[providerName]);
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <Button Icon={SiGoogle} onClick={() => loginWithProvider('google')}>
        Google でログイン
      </Button>
      <Button Icon={SiTwitter} onClick={() => loginWithProvider('twitter')}>
        Twitter でログイン
      </Button>
      <Button Icon={SiGithub} onClick={() => loginWithProvider('github')}>
        GitHub でログイン
      </Button>
      <Button Icon={SiFacebook} onClick={() => loginWithProvider('facebook')}>
        Facebook でログイン
      </Button>
    </div>
  );
};

export default Login;
