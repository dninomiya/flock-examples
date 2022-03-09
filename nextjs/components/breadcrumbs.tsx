import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { HiChevronRight, HiHome } from 'react-icons/hi';

type Props = {
  pages: {
    href?: string;
    name: string;
  }[];
};

const Breadcrumbs = ({ pages }: Props) => {
  const getItemTag = (isLast: boolean) =>
    (isLast ? 'span' : 'span') as keyof JSX.IntrinsicElements;

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <Link href="/">
            <a className="block text-gray-400 hover:text-gray-500">
              <HiHome className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">ホーム</span>
            </a>
          </Link>
        </li>
        {pages.map((page, index) => {
          const isLast = pages.length - 1 === index;
          const Tag = getItemTag(isLast);

          return (
            <li key={page.name}>
              <div className="flex items-center">
                <HiChevronRight
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <Tag
                  href={isLast ? undefined : page.href}
                  className={classNames(
                    'ml-4 text-sm font-medium text-gray-500',
                    !isLast && 'hover:text-gray-700'
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {page.name}
                </Tag>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
