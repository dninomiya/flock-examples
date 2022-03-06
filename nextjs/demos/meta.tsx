import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import Button from '../components/button';
import { Site } from '../lib/site';

const Meta = () => {
  const [title, setTitle] = useState<string>('メタ, OGP');
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <div>
      <NextSeo
        title={title}
        openGraph={{
          images: [
            {
              url: `${Site.origin}/images/${router.query.id as string}.png`,
            },
          ],
        }}
      />

      <label className="mb-4 inline-block">
        <span>新しいタイトル</span>
        <input
          type="text"
          className="rounded border block mt-2 bg-transparent"
          autoComplete="off"
          autoFocus
          ref={ref}
        />
      </label>

      <Button
        onClick={() => {
          setTitle(ref.current?.value as string);
        }}
      >
        ページタイトルを変更
      </Button>
    </div>
  );
};

export default Meta;
