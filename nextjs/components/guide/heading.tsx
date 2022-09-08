import React, { FC, ReactNode } from 'react';

const GuideHeading: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <h2 className="text-xl font-bold mb-4">{children}</h2>;
};

export default GuideHeading;
