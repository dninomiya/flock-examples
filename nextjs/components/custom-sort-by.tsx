import React from 'react';
import { connectSortBy } from 'react-instantsearch-dom';

const SortBy = ({
  currentRefinement,
  refine,
  items,
}: {
  items: { label: string; value: string }[];
  currentRefinement: string;
  refine: (value: string) => void;
}) => {
  return (
    <div className="relative">
      <select
        className="bg-transparent rounded border px-3 py-1 w-full pr-10"
        value={currentRefinement}
        onChange={(e) => refine(e.currentTarget.value)}
      >
        {items.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const CustomSortBy = connectSortBy(SortBy);

export default CustomSortBy;
