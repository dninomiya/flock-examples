import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BasicDoc } from '../types/basic-doc';
import { Guide } from '../types/guide';

type Props = {
  guide: Guide | BasicDoc;
};

const GuideGridItem = ({ guide }: Props) => {
  if (!guide.ready) {
    return (
      <Link href={`/${guide.id}`} key={guide.id}>
        <a className="block group">
          <div className="aspect-video bg-[#F3F5F6] transition-transform group-hover:scale-105 shadow rounded-lg relative overflow-hidden ring-1 ring-slate-200">
            <div className="absolute inset-0">
              <Image
                src={`/images/${guide.id}.png`}
                width={1280}
                height={720}
                alt=""
              />
            </div>
          </div>
          <p className="mt-2 text-sm">{guide.title}</p>
        </a>
      </Link>
    );
  }

  return (
    <div className="opacity-30">
      <div className="aspect-video bg-gray-300 shadow rounded-lg relative overflow-hidden">
        <p className="absolute top-0 left-0 px-2 py-1 rounded-br-md bg-slate-800 text-slate-300 text-xs">
          準備中
        </p>
      </div>
      <p className="mt-2 text-sm">{guide.title}</p>
    </div>
  );
};

export default GuideGridItem;
