import React, { FC } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { IconType } from 'react-icons';
import { SiApple, SiWindows } from 'react-icons/si';

const Hotkey = () => {
  useHotkeys('ctrl+s, cmd+s', (e) => {
    e.preventDefault();
    alert('記事を保存しました');
  });

  return (
    <div className="flex gap-6">
      <Key hotkey="⌘ S" Logo={SiApple}></Key>
      <Key hotkey="Ctrl S" Logo={SiWindows}></Key>
    </div>
  );
};

export default Hotkey;

const Key: FC<{
  hotkey: string;
  Logo: IconType;
}> = ({ hotkey, Logo }) => {
  return (
    <div className="inline-flex text-gray-300 overflow-hidden border border-gray-700 rounded-md bg-slate-500">
      <span className="bg-slate-700 flex text-sm items-center px-2">
        <Logo />
      </span>
      <span className="px-3 py-1">{hotkey}</span>
    </div>
  );
};
