import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement[];
};

const DocDetails = ({ children }: Props) => {
  const body = [...children];
  const title = body.shift();

  return (
    <details className="not-prose border shadow-lg p-6 rounded-lg">
      <summary className="text-sm leading-6 select-none">
        {title?.props.children || 'タイトルなし'}
      </summary>
      <div className="mt-3 text-sm leading-6 space-y-4">{body}</div>
    </details>
  );
};

export default DocDetails;
