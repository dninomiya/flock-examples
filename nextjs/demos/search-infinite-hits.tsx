import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { searchClient } from '../algolia/client';
import CustomInfiniteHits from '../components/custom-infinite-hits';

const SearchInfiniteHits = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="posts">
      <CustomInfiniteHits />
    </InstantSearch>
  );
};

export default SearchInfiniteHits;
