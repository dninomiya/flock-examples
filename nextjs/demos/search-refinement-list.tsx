import React from 'react';
import { searchClient } from '../algolia/client';
import { InstantSearch } from 'react-instantsearch-dom';
import CustomHits from '../components/custom-hits';
import CustomRefinementList from '../components/custom-refinement-list';
import { useRouter } from 'next/router';
import { SearchState } from 'react-instantsearch-core';

const SearchRefinementList = () => {
  const router = useRouter();
  const updateQueryParams = (state: SearchState) => {
    router.replace(
      {
        query: {
          id: router.query.id,
          ...state.refinementList,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  const getDefaultRefinement = () => {
    const tags = router.query.tags;

    if (!tags || !tags.length) {
      return;
    }

    return typeof tags === 'string' ? [tags] : tags;
  };

  return (
    <InstantSearch
      onSearchStateChange={updateQueryParams}
      searchClient={searchClient}
      indexName="posts"
    >
      <div className="flex">
        <div className="border-r w-40 mr-6">
          <h2 className="mb-2">タグ</h2>
          <CustomRefinementList
            attribute="tags"
            defaultRefinement={getDefaultRefinement()}
          />
        </div>
        <div className="flex-1">
          <CustomHits />
        </div>
      </div>
    </InstantSearch>
  );
};

export default SearchRefinementList;
