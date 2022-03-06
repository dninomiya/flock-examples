import React from 'react';
import { SiGoogle } from 'react-icons/si';
import Button from '../components/button';

const CustomComponent = () => {
  return (
    <div className="flex gap-4">
      <Button Icon={SiGoogle}>アイコン付きボタン</Button>
      <Button>ボタン</Button>
      <Button disabled>無効なボタン</Button>
      <Button href="./">リンクボタン</Button>
    </div>
  );
};

export default CustomComponent;
