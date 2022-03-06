import React from 'react';
import { StateResultsProvided } from 'react-instantsearch-core';
import { connectStateResults } from 'react-instantsearch-dom';

const StateResults = ({ searchResults, searchState }: StateResultsProvided) => {
  if (!searchState || !searchResults) {
    return <p>検索結果は見つかりませんでした</p>;
  }

  const min = ((searchState.page || 1) - 1) * searchResults.hitsPerPage + 1;
  const max = Math.min(
    min + searchResults.hitsPerPage - 1,
    searchResults.nbHits
  );
  return (
    <p>
      {searchResults.nbHits}件中 {min} - {max}件を表示
    </p>
  );
};

const CustomStateResults = connectStateResults(StateResults);

export default CustomStateResults;
