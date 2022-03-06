import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import React, { useEffect, useRef } from 'react';
import { InfiniteHitsProvided } from 'react-instantsearch-core';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import { Post } from '../types/post';

const InfiniteHits = ({
  hits,
  hasMore,
  refineNext,
}: InfiniteHitsProvided<Post>) => {
  const sentinel = useRef<HTMLDivElement>(null);
  const scrollRoot = useRef<HTMLDivElement>(null);
  const props = useRef({
    hasMore,
    refineNext,
  });

  useEffect(() => {
    props.current = {
      hasMore,
      refineNext,
    };
  }, [hasMore, refineNext]);

  const onSentinelIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && props.current.hasMore) {
        props.current.refineNext();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onSentinelIntersection, {
      root: scrollRoot.current,
    });

    observer.observe(sentinel.current as HTMLDivElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div ref={scrollRoot} className="h-40 p-4 border rounded overflow-y-auto">
        <ul className="space-y-6">
          {hits.map((hit) => (
            <li key={hit.id}>
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
        <div ref={sentinel} />
        {!hasMore && hits.length && (
          <p className="mt-4 opacity-60">すべての記事を読み込みました</p>
        )}
        {hasMore && (
          <p className="mt-4 opacity-60">追加の記事を読み込んでいます...</p>
        )}
      </div>
    </div>
  );
};

const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);

export default CustomInfiniteHits;
