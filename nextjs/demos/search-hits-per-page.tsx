import { useRouter } from 'next/router';
import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { searchClient } from '../algolia/client';
import CustomHits from '../components/custom-hits';
import CustomHitsPerPage from '../components/custom-hits-per-page';
import { SearchState } from 'react-instantsearch-core';

const SearchPagination = () => {
  const router = useRouter();
  const updateQueryParams = (state: SearchState) => {
    router.replace(
      {
        query: {
          id: router.query.id,
          hitsPerPage: state.hitsPerPage,
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
      <CustomHits />
      <div className="mt-6">
        <CustomHitsPerPage
          items={[
            {
              value: 3,
              label: '3',
            },
            {
              value: 5,
              label: '5',
            },
            {
              value: 10,
              label: '10',
            },
          ]}
          defaultRefinement={Number(router.query.hitsPerPage as string) || 3}
        />
      </div>
    </InstantSearch>
  );
};

export default SearchPagination;
