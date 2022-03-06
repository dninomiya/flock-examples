import React from 'react';
import { SiGithub } from 'react-icons/si';

const Icon = () => {
  return (
    <div className="flex items-center flex-wrap gap-6">
      <SiGithub className="text-xl" />
      <SiGithub className="text-2xl" />
      <SiGithub className="text-3xl" />
      <SiGithub className="text-4xl text-pink-500" />
    </div>
  );
};

export default Icon;
