import React, { FC, ReactNode } from 'react';
import { HiExternalLink } from 'react-icons/hi';

const ExternalLink: FC<{
  href: string;
  children: ReactNode;
}> = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex mx-1"
      rel="noreferrer"
    >
      <span>{children}</span>
      <HiExternalLink />
    </a>
  );
};

export default ExternalLink;
