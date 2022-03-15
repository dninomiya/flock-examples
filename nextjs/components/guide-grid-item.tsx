import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BasicDoc } from '../types/basic-doc';
import { Cause } from '../types/cause';
import { Guide } from '../types/guide';

type Props = {
  guide: Guide | BasicDoc | Cause;
};

const GuideGridItem = ({ guide }: Props) => {
  if (guide.ready) {
    return (
      <div className="opacity-30">
        <div className="aspect-video bg-gray-300 shadow rounded-lg relative overflow-hidden">
          <p className="absolute top-0 left-0 px-2 py-1 rounded-br-md bg-slate-800 text-slate-300 text-xs">
            準備中
          </p>
        </div>
        <p className="mt-2 text-sm">{guide.title}</p>
        {'features' in guide && (
          <div className="flex gap-2 opacity-40">
            {guide.features.map((feature) => (
              <span key={feature} className="text-xs">
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

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
};

export default GuideGridItem;
