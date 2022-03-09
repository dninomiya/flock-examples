import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const TAB_ITEMS = [
  {
    id: 'profile',
    label: 'プロフィール',
    content: 'プロフィールが表示されます',
  },
  {
    id: 'posts',
    label: '投稿した記事一覧',
    content: '投稿した記事一覧が表示されます',
  },
  {
    id: 'settings',
    label: '設定',
    content: '設定が表示されます',
  },
];

const Tab = () => {
  const router = useRouter();
  const Content =
    TAB_ITEMS.find((item) => item.id === (router.query.view as string))
      ?.content || TAB_ITEMS[0].content;

  return (
    <div className="">
      <div className="inline-flex overflow-hidden divide-x border-t border-l rounded-t-md border-r">
        {TAB_ITEMS.map((item) => {
          return (
            <Link
              href={{
                query: {
                  id: router.query.id,
                  view: item.id,
                },
              }}
              shallow
              replace
              key={item.id}
            >
              <a
                className={classNames(
                  'px-4 py-2',
                  router.query.view === item.id && 'bg-pink-600'
                )}
              >
                {item.label}
              </a>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border rounded-b-md">{Content}</div>
    </div>
  );
};

export default Tab;
