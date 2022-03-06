import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import React from 'react';
import { HitsProvided } from 'react-instantsearch-core';
import { connectHits } from 'react-instantsearch-dom';
import { Post } from '../types/post';

const Hits = ({ hits }: HitsProvided<Post>) => {
  return (
    <ul className="space-y-6">
      {hits.map((hit) => (
        <li key={hit.objectID}>
          <h2>{hit.title}</h2>
          <div className="flex mt-0.5 space-x-3">
            <p className="text-sm opacity-40">
              {formatDistanceToNow(hit.createdAt, {
                locale: ja,
                addSuffix: true,
              })}
            </p>
            <ul className="flex flex-wrap gap-2">
              {hit.tags?.map((tag) => (
                <li
                  className="text-xs px-2 py-0.5 rounded-md opacity-60 text-white bg-gray-700 border-opacity-20"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

const CustomHits = connectHits(Hits);

export default CustomHits;
