import React, { ChangeEvent, useEffect, useState } from 'react';
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
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [seek, setSeek] = useState<number>(0);
  const [playBGM, { pause, sound, stop, duration }] = useSound(
    '/sounds/bgm.mp3',
    {
      volume: 0.2,
      onplay: () => setIsPlaying(true),
      onend: () => setIsPlaying(false),
      onpause: () => setIsPlaying(false),
    }
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const value = sound?.seek();
      if (value) {
        setSeek(value);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [sound]);

  useEffect(() => stop, [stop]);

  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const volume = e.currentTarget.value;
    sound.volume(Number(volume));
  };

  const changeSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const seek = e.currentTarget.value;
    sound.seek(Number(seek));
    setSeek(Number(seek));
  };

  if (!sound) {
    return null;
  }

  return (
    <div>
      <div className="flex ml-auto w-max items-center space-x-2">
        <MdVolumeMute />
        <input
          type="range"
          step={0.01}
          max={1}
          min={0}
          defaultValue={sound?.volume()}
          onChange={changeVolume}
        />
        <MdVolumeUp />
      </div>

      <div>
        <Siriwave
          style="ios9"
          color="#999"
          cover
          amplitude={isPlaying ? 1 : 0}
          lerpSpeed={0.08}
        />
      </div>

      <div className="flex items-center space-x-4 mt-4">
        <button
          className="text-4xl"
          onClick={() => {
            if (isPlaying) {
              pause();
            } else {
              playBGM();
            }
          }}
        >
          {isPlaying ? <MdOutlinePause /> : <MdPlayArrow />}
        </button>
        <input
          className="flex-1"
          type="range"
          step={0.1}
          max={duration ? Math.round(duration / 1000) : 0}
          min={0}
          value={seek}
          onChange={changeSeek}
        />
      </div>
    </div>
  );
};

export default Sound;
