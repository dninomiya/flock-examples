import React, { ChangeEvent, useEffect, useState } from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import {
  MdOutlinePause,
  MdPlayArrow,
  MdVolumeMute,
  MdVolumeUp,
} from 'react-icons/md';
import Siriwave from 'react-siriwave';
import useSound from 'use-sound';

const Sound = () => {
  const [play] = useSound('/sounds/button.mp3');

  return (
    <button
      className="flex items-center space-x-2 border border-gray-600/60 rounded-md p-2"
      onClick={() => play()}
    >
      <HiOutlineBell />
      <span>通知音を再生</span>
    </button>
  );
};

export default Sound;
