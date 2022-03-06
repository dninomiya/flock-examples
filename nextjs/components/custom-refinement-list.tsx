import React from 'react';
import { RefinementListProvided } from 'react-instantsearch-core';
import { connectRefinementList } from 'react-instantsearch-dom';

const RefinementList = ({ items, refine }: RefinementListProvided) => {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.label}>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="bg-transparent rounded"
              value={item.value}
              defaultChecked={item.isRefined}
              onClick={(e) => {
                refine(item.value);
              }}
            />
            <span>{item.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

const CustomRefinementList = connectRefinementList(RefinementList);

export default CustomRefinementList;
