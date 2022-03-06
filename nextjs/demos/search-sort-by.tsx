import { useRouter } from 'next/router';
import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { searchClient } from '../algolia/client';
import CustomHits from '../components/custom-hits';
import CustomSortBy from '../components/custom-sort-by';
import { SearchState } from 'react-instantsearch-core';

const SearchSort = () => {
  const router = useRouter();
  const updateQueryParams = (state: SearchState) => {
    router.replace(
      {
        query: {
          id: router.query.id,
          sortBy: state.sortBy || [],
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  return (
    <InstantSearch
      onSearchStateChange={updateQueryParams}
      searchClient={searchClient}
      indexName="posts"
    >
      <div className="flex">
        <div className="border-r pr-4 mr-6">
          <h2 className="mb-2">並び替え</h2>
          <CustomSortBy
            defaultRefinement={router.query.sortBy || 'posts'}
            items={[
              {
                label: '最新順',
                value: 'posts',
              },
              {
                label: '古い順',
                value: 'posts_asc',
              },
            ]}
          />
        </div>
        <div className="flex-1">
          <CustomHits />
        </div>
      </div>
    </InstantSearch>
  );
};

export default SearchSort;
