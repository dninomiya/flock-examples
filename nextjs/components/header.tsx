import { Dialog } from '@headlessui/react';
import classNames from 'classnames';
import { logEvent } from 'firebase/analytics';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HiMenu, HiMoon, HiOutlineHeart, HiOutlineMoon } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { ga } from '../firebase/client';
import { Site } from '../lib/site';

const navigation = [
  {
    href: '/basic',
    name: '基礎をまなぶ',
  },
  {
    href: '/guides',
    name: '実装例をさがす',
  },
  {
    href: '/causes',
    name: 'コース',
  },
];

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>();
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const logSponsor = () => {
    logEvent(ga, 'select_content', {
      content_type: 'chance',
      item_id: 'sponsor',
    });
  };

  const toggleSideNav = () => {
    setIsSideNavOpen((status) => !status);
  };

  return (
    <div>
      <header className="border-b dark:border-slate-800">
        <div className="container h-14 flex items-center gap-4">
          <button className="lg:hidden" onClick={toggleSideNav}>
            <HiMenu size={20} />
          </button>
          <p className="font-bold text-xl">
            <Link href="/guides">
              <a className="flex items-center space-x-2">
                <Image src="/images/logo.svg" alt="" width={24} height={24} />
                <span>{Site.title}</span>
              </a>
            </Link>
          </p>
          <div className="space-x-4 hidden lg:flex">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={classNames(
                    item.href === router.pathname
                      ? 'bg-black/30 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium'
                  )}
                  aria-current={
                    item.href === router.pathname ? 'page' : undefined
                  }
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
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
            className="text-2xl hidden lg:block"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
          >
            {isDark ? (
              <HiMoon className="text-yellow-400" />
            ) : (
              <HiOutlineMoon className="text-gray-400" />
            )}
          </button>
          <a
            href={Site.github}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:block"
          >
            <SiGithub className="text-2xl" />
          </a>
        </div>
      </header>
      <Dialog
        open={isSideNavOpen}
        onClose={() => setIsSideNavOpen(false)}
        as="div"
        className="fixed z-10 inset-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75" />
        <div className="bg-slate-900 divide-y divide-slate-800 w-10/12 overflow-auto text-white fixed top-0 left-0 bottom-0">
          <div className="p-4">
            <Link href="/guides">
              <a className="flex items-center space-x-2">
                <Image src="/images/logo.svg" alt="" width={24} height={24} />
                <span>{Site.title}</span>
              </a>
            </Link>
          </div>
          <div className="py-2">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <a className="block px-4 py-2">{item.name}</a>
              </Link>
            ))}
          </div>
          <div className="py-4 px-4 flex items-center space-x-4">
            <a
              href={Site.github}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <SiGithub className="text-xl" />
            </a>
            <button
              className="text-xl"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            >
              {isDark ? (
                <HiMoon className="text-yellow-400" />
              ) : (
                <HiOutlineMoon className="text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Header;
