import React from 'react';
import { searchClient } from '../algolia/client';
import { InstantSearch } from 'react-instantsearch-dom';
import CustomHits from '../components/custom-hits';
import CustomSearchBox from '../components/custom-search-box';
import { useRouter } from 'next/router';
import { SearchState } from 'react-instantsearch-core';

const SearchHits = () => {
  const router = useRouter();
  const updateQueryParams = (state: SearchState) => {
    router.replace(
      {
        query: {
          id: router.query.id,
          query: state.query || [],
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
      <div className="mb-6">
        <CustomSearchBox
          defaultRefinement={(router.query.query as string) || ''}
        />
      </div>
      <CustomHits />
    </InstantSearch>
  );
};

export default SearchHits;
