import Link from 'next/link';
import React from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { SiGithub, SiTwitter, SiYoutube } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="container mt-20 py-10">
      <p className="mb-6 text-gray-600">
        このサイトはWebアプリ開発メンターサービス
        <a
          target="_blank"
          className="text-pink-600 mx-1 inline-flex items-center space-x-1"
          href="https://flock.codes/about"
          rel="noreferrer"
        >
          <span>FLock</span>
          <HiExternalLink />
        </a>
        の教材の一部であり、予告なく非公開になることがあります。
      </p>

      <ul className="mb-6 flex opacity-60 space-x-4">
        <li>
          <Link href="/about">
            <a>
              <span>このサイトについて</span>
            </a>
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/dninomiya/flock-examples/commits/main"
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            <span>更新履歴</span>
            <HiExternalLink />
          </a>
        </li>
      </ul>

      <div className="inline-flex mb-4 text-xl bg-white rounded-full p-0.5 space-x-4 pr-5 items-center">
        <img
          src="https://github.com/dninomiya.png"
          alt=""
          className="rounded-full overflow-hidden w-10 h-10"
        />
        <a
          href="https://twitter.com/d151005"
          target="_blank"
          rel="noreferrer"
          className="text-[#1DA1F2]"
        >
          <SiTwitter />
        </a>
        <a
          href="https://www.youtube.com/channel/UCUPq5dKFGnOziaqYI-ejYcg"
          target="_blank"
          rel="noreferrer"
          className="text-[#FF0000]"
        >
          <SiYoutube />
        </a>
        <a
          href="https://github.com/dninomiya"
          target="_blank"
          rel="noreferrer"
          className="text-[#171515]"
        >
          <SiGithub />
        </a>
      </div>
      <p className="text-gray-600">&copy; 2022 Flock</p>
    </footer>
  );
};

export default Footer;
