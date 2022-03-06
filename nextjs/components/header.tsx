import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiMoon, HiOutlineCollection, HiOutlineMoon } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { Site } from '../lib/site';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>();

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

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
