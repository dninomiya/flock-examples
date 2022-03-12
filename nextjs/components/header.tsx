import { logEvent } from 'firebase/analytics';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  HiMoon,
  HiOutlineCollection,
  HiOutlineHeart,
  HiOutlineMoon,
} from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { ga } from '../firebase/client';
import { Site } from '../lib/site';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>();

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  const logSponsor = () => {
    logEvent(ga, 'select_content', {
      content_type: 'chance',
      item_id: 'sponsor',
    });
  };

  return (
    <header className="border-b dark:border-slate-800">
      <div className="container h-14 flex items-center space-x-4">
        <p className="font-bold text-xl">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <HiOutlineCollection />
              <span>{Site.title}</span>
            </a>
          </Link>
        </p>
        <span className="flex-1"></span>
        <a
          href={Site.sponsor}
          target="_blank"
          className="flex items-center space-x-2 text-sm border rounded-md text-slate-600 dark:text-slate-300 px-2 py-1.5 bg-slate-100 hover:bg-slate-200 hover:border-slate-300 border-slate-200 dark:bg-slate-800 dark:border-slate-700 transition-colors dark:hover:border-slate-600 dark:hover:bg-slate-700"
          rel="noreferrer"
          onClick={logSponsor}
        >
          <HiOutlineHeart className="text-pink-600" size={20} />
          <span>応援する</span>
        </a>
        <button
          className="text-2xl"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
          {isDark ? (
            <HiMoon className="text-yellow-400" />
          ) : (
            <HiOutlineMoon className="text-gray-400" />
          )}
        </button>
        <a href={Site.github} target="_blank" rel="noreferrer">
          <SiGithub className="text-2xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;
