import { ReactNode } from 'react';
import {
  HiExclamation,
  HiExclamationCircle,
  HiInformationCircle,
} from 'react-icons/hi';

const DocAlert = ({
  node: { tagName },
  children,
}: {
  node: {
    tagName: 'info' | 'warning' | 'important';
  };
  children: ReactNode;
}) => {
  const Icons = {
    info: HiInformationCircle,
    warning: HiExclamation,
    important: HiExclamationCircle,
  };

  const Icon = Icons[tagName];

  const colors = {
    info: {
      bg: 'bg-blue-50',
      icon: 'text-blue-400',
      text: 'text-blue-700',
    },
    warning: {
      bg: 'bg-yellow-50',
      icon: 'text-yellow-400',
      text: 'text-yellow-700',
    },
    important: {
      bg: 'bg-red-50',
      icon: 'text-red-400',
      text: 'text-red-700',
    },
  };

  const color = colors[tagName];

  return (
    <div className={`rounded-md not-prose p-4 ${color.bg}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={`h-5 w-5 ${color.icon}`} aria-hidden="true" />
        </div>
        <div className={`ml-3 flex-1 text-sm ${color.text}`}>{children}</div>
      </div>
    </div>
  );
};

export default DocAlert;
