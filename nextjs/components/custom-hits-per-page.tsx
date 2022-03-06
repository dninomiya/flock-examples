import React from 'react';
import { connectHitsPerPage } from 'react-instantsearch-dom';

const HitsPerPage = ({
  items,
  refine,
  currentRefinement,
}: {
  items: {
    value: number;
    label: string;
  }[];
  refine: (value: number) => void;
  currentRefinement: number;
}) => {
  return (
    <label>
      <span>表示件数:</span>
      <select
        className="bg-transparent rounded ml-1"
        defaultValue={currentRefinement}
        onChange={(event) => refine(Number(event.currentTarget.value))}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
};

const CustomHitsPerPage = connectHitsPerPage(HitsPerPage);

export default CustomHitsPerPage;
