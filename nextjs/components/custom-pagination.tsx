import React from 'react';
import { connectPagination } from 'react-instantsearch-dom';

const Pagination = ({
  currentRefinement,
  nbPages,
  refine,
}: {
  currentRefinement: number;
  nbPages: number;
  refine: (value: number) => void;
}) => {
  return (
    <div className="flex space-x-3">
      {currentRefinement > 1 && (
        <button
          onClick={() => refine(currentRefinement - 1)}
          className="px-2 py-1 border rounded-md"
        >
          前へ
        </button>
      )}
      {nbPages > currentRefinement && (
        <button
          onClick={() => refine(currentRefinement + 1)}
          className="px-2 py-1 border rounded-md"
        >
          次へ
        </button>
      )}
    </div>
  );
};

const CustomPagination = connectPagination(Pagination);

export default CustomPagination;
