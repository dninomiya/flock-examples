import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { searchClient } from '../algolia/client';
import CustomHits from '../components/custom-hits';
import CustomStateResults from '../components/custom-state-results';

const SearchStateResults = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="posts">
      <div className="mb-4 border-b pb-4">
        <CustomStateResults />
      </div>
      <CustomHits />
    </InstantSearch>
  );
};

export default SearchStateResults;
