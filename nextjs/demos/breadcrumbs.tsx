import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';

const BreadcrumbsDemo = () => {
  return (
    <Breadcrumbs
      pages={[
        {
          name: 'パンくず',
        },
      ]}
    />
  );
};

export default BreadcrumbsDemo;
