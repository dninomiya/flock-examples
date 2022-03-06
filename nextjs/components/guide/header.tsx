import { useRouter } from 'next/router';
import React from 'react';
import { HiArrowLeft, HiFlag } from 'react-icons/hi';
import { Site } from '../../lib/site';
import { Guide } from '../../types/guide';

type Props = {
  guide: Guide;
};

const GuideHeader = ({ guide }: Props) => {
  const router = useRouter();
  const back = () => {
    router.back();
  };

  return (
    <div className="py-6 flex items-center space-x-6">
      <button onClick={back}>
        <HiArrowLeft className="text-2xl" />
      </button>
      <h1 className="font-bold text-xl">{guide.title}</h1>
      <span className="flex-1"></span>
      <a
        href={`https://github.com/flock-team/flock-examples/issues/new?assignees=nino-cast&labels=%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E5%A0%B1%E5%91%8A&title=「${
          guide.title
        }」に関する報告&body=url:%0D%0A${`${Site.origin}/${router.query.id}`}%0D%0A%0D%0A報告内容:%0D%0A`}
        target="_blank"
        className="flex items-center space-x-2 px-3 py-2 hover:bg-black/10 dark:hover:bg-black/40 opacity-60 rounded-lg"
        rel="noreferrer"
      >
        <HiFlag />
        <span>報告</span>
      </a>
    </div>
  );
};

export default GuideHeader;
