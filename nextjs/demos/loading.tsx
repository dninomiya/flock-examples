import React, { FC, useEffect, useState } from 'react';
import faker from '@faker-js/faker';
import classNames from 'classnames';
import { HiRefresh } from 'react-icons/hi';

type User = {
  name: string;
  gender: string;
  imageURL: string;
};

const Loading = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    setTimeout(() => {
      setUser({
        name: faker.name.findName(),
        gender: faker.name.gender(),
        imageURL: faker.image.avatar(),
      });
    }, 5000);
  };

  return (
    <div>
      <button
        className="text-gray-600"
        onClick={() => {
          setUser(undefined);
          fetchUser();
        }}
      >
        読み込み
      </button>

      <div
        className={classNames(
          'flex gap-6 mt-6 rounded-md bg-gray-700 shadow w-96 max-w-full p-6',
          !user && 'animate-pulse'
        )}
      >
        <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
          {user?.imageURL && <img src={user.imageURL} alt="" />}
        </div>
        <div>
          {user ? <p>{user.name}</p> : <Placeholder className="w-44" />}
          <div className="mt-1">
            {user ? (
              <p className="text-gray-500">{user.gender}</p>
            ) : (
              <Placeholder />
            )}
          </div>
        </div>
      </div>

      <div className="mt-10">
        {!user && <HiRefresh className="animate-spin text-4xl text-gray-700" />}
      </div>
    </div>
  );
};

export default Loading;

const Placeholder = ({ className }: { className?: string }) => {
  return (
    <div className="h-6 flex items-center">
      <p
        className={classNames(
          `h-3 rounded-full bg-gray-500`,
          className || 'w-20'
        )}
      ></p>
    </div>
  );
};
