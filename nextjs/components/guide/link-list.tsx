import React, { FC, ReactNode } from 'react';
import { HiGlobe, HiOutlineExternalLink } from 'react-icons/hi';
import {
  SiAlgolia,
  SiFirebase,
  SiGithub,
  SiMdnwebdocs,
  SiNextdotjs,
  SiNpm,
  SiReact,
  SiStripe,
  SiSwiper,
  SiTailwindcss,
  SiTwilio,
} from 'react-icons/si';

type Props = {
  items?: {
    title: string;
    url: string;
  }[];
};

const GuideLinkList = ({ items }: Props) => {
  if (Boolean(items?.length)) {
    return (
      <ul>
        {items?.map((item) => (
          <li key={item.title}>
            <ListItem url={item.url} title={item.title} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <p className="opacity-60">なし</p>;
  }
};

export default GuideLinkList;

const ListItem: FC<{ url: string; title: string; icon?: ReactNode }> = ({
  url,
  title = url,
  icon,
}) => {
  const renderDocIcon = (url: string) => {
    if (url.match('firebase')) {
      return <SiFirebase className="text-[#FFCA28]" />;
    }
    if (url.match('algolia')) {
      return <SiAlgolia className="text-[#5468FF]" />;
    }
    if (url.match('mdn')) {
      return <SiMdnwebdocs />;
    }
    if (url.match('stripe')) {
      return <SiStripe />;
    }
    if (url.match('nextjs')) {
      return <SiNextdotjs />;
    }
    if (url.match('tailwindcss')) {
      return <SiTailwindcss />;
    }
    if (url.match('swiper')) {
      return <SiSwiper className="text-[#6332f6]" />;
    }
    if (url.match('npm')) {
      return <SiNpm className="text-[#CC3534]" />;
    }
    if (url.match('github')) {
      return <SiGithub className="text-[#171515] dark:text-white" />;
    }
    if (url.match('sendgrid')) {
      return <SiTwilio className="text-[#F22F46]" />;
    }
    if (url.match('reactjs')) {
      return <SiReact className="text-[#61DBFB]" />;
    }
    if (url.match('mozilla')) {
      return <SiMdnwebdocs className="text-[#b366f9]" />;
    }
    return <HiGlobe />;
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center space-x-1"
    >
      {icon || renderDocIcon(url)}
      <span>{title}</span>
      <HiOutlineExternalLink />
    </a>
  );
};
