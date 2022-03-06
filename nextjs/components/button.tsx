import classNames from 'classnames';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import { IconType } from 'react-icons';

const Button: FC<
  (
    | ButtonHTMLAttributes<HTMLButtonElement>
    | AnchorHTMLAttributes<HTMLAnchorElement>
  ) & {
    Icon?: IconType;
  }
> = ({ children, className, Icon, ...props }) => {
  const buttonClass = classNames(
    'px-6 py-3 min-w-max w-28 rounded-full bg-gray-700 hover:text-white space-x-2 flex items-center text-gray-200 disabled:hover:text-gray-200 shadow disabled:cursor-not-allowed transition-colors cursor-disabled disabled:opacity-30 pointer-none disabled:hover:bg-gray-700 hover:bg-pink-800',
    className
  );

  if ((props as AnchorHTMLAttributes<HTMLAnchorElement>).href) {
    const { href, ...linkProps } =
      props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href!} {...props}>
        <a className={buttonClass} {...linkProps}>
          {Icon && <Icon />}
          <span className="flex-1">{children}</span>
        </a>
      </Link>
    );
  }

  return (
    <button
      className={buttonClass}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {Icon && <Icon />}
      <span className="flex-1">{children}</span>
    </button>
  );
};

export default Button;
