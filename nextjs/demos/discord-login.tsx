import React from 'react';
import { SiDiscord } from 'react-icons/si';
import Button from '../components/button';

const Login = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button Icon={SiDiscord}>Discord でログイン</Button>
    </div>
  );
};

export default Login;
