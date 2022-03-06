import { useRouter } from 'next/router';
import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { searchClient } from '../algolia/client';
import CustomHits from '../components/custom-hits';
import CustomPagination from '../components/custom-pagination';
import { SearchState } from 'react-instantsearch-core';

const SearchPagination = () => {
  const router = useRouter();
  const updateQueryParams = (state: SearchState) => {
    router.replace(
      {
        query: {
          id: router.query.id,
          page: state.page || [],
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
        <CustomPagination
          defaultRefinement={(router.query.page as string) || 1}
        />
      </div>
    </InstantSearch>
  );
};

export default SearchPagination;
