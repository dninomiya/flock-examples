import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

const DocLink: FC<{
  href: string;
  children: ReactNode;
}> = ({ href, children }) => {
  const isExternal = href?.match('^http');

  if (isExternal) {
    return (
      <a href={href} rel="noreferrer" className="text-pink-600" target="_blank">
        <span>{children}</span>
        <HiOutlineExternalLink className="inline-block w-3 h-3 text-pink-400 align-top" />
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a className="text-pink-600">{children}</a>
      </Link>
    );
  }
};

export default DocLink;
