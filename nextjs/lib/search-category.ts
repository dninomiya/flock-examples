import { Category } from '../types/category';

export const SearchCategory: Category = {
  title: '検索',
  items: [
    {
      id: 'installation-algolia',
      title: 'Algolia インストール',
      sources: ['algolia/client.ts', '../firebase/functions/src/algolia.ts'],
      libraries: [
        {
          title: 'algoliasearch',
          url: 'https://www.npmjs.com/package/algoliasearch',
        },
      ],
      docs: [
        {
          title: 'How to Install React InstantSearch',
          url: 'https://www.algolia.com/doc/guides/building-search-ui/installation/react/',
        },
        {
          title: '環境を構成する',
          url: 'https://firebase.google.com/docs/functions/config-env?hl=ja',
        },
        {
          title: 'Environment Variables',
          url: 'https://nextjs.org/docs/basic-features/environment-variables',
        },
      ],
    },
    {
      id: 'manage-index',
      title: 'インデックス管理',
      sources: [],
      docs: [
        {
          title: 'Manage Your Indices',
          url: 'https://www.algolia.com/doc/guides/sending-and-managing-data/manage-your-indices/',
        },
      ],
    },
    {
      id: 'manage-record',
      title: 'レコード管理',
      sources: [
        'demos/manage-record.tsx',
        '../firebase/functions/src/sync-post-to-algolia.ts',
      ],
      docs: [
        {
          title: 'Format and Structure Your Data',
          url: 'https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/',
        },
        {
          title: 'Send and Update Your Data',
          url: 'https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/',
        },
      ],
    },
    {
      id: 'search-query',
      title: 'キーワード検索',
      sources: ['demos/search-query.tsx'],
      libraries: [
        {
          title: 'react-instantsearch-dom',
          url: 'https://www.npmjs.com/package/react-instantsearch-dom',
        },
      ],
      docs: [
        {
          title: 'InstantSearch',
          url: 'https://www.algolia.com/doc/api-reference/widgets/instantsearch/react/',
        },
        {
          title: 'SearchBox',
          url: 'https://www.algolia.com/doc/api-reference/widgets/search-box/react/',
        },
        {
          title: 'Hits',
          url: 'https://www.algolia.com/doc/api-reference/widgets/hits/react/',
        },
      ],
    },
    {
      id: 'search-refinement-list',
      title: '条件絞り込み',
      sources: [
        'demos/search-refinement-list.tsx',
        'components/custom-refinement-list.tsx',
      ],
      libraries: [
        {
          title: 'react-instantsearch-dom',
          url: 'https://www.npmjs.com/package/react-instantsearch-dom',
        },
      ],
      docs: [
        {
          title: 'RefinementList',
          url: 'https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/#connector',
        },
      ],
    },
    {
      id: 'search-sort-by',
      title: 'ソート',
      sources: ['demos/search-sort-by.tsx', 'components/custom-sort-by.tsx'],
      libraries: [
        {
          title: 'react-instantsearch-dom',
          url: 'https://www.npmjs.com/package/react-instantsearch-dom',
        },
      ],
      docs: [
        {
          title: 'SortBy',
          url: 'https://www.algolia.com/doc/api-reference/widgets/sort-by/react/',
        },
      ],
    },
    {
      id: 'search-state-results',
      title: 'ヒット件数',
      sources: [
        'demos/search-state-results.tsx',
        'components/custom-state-results.tsx',
      ],
      libraries: [
        {
          title: 'react-instantsearch-dom',
          url: 'https://www.npmjs.com/package/react-instantsearch-dom',
        },
      ],
      docs: [
        {
          title: 'StateResults',
          url: 'https://www.algolia.com/doc/api-reference/widgets/state-results/react/',
        },
      ],
    },
    {
      id: 'search-pagination',
      title: 'ページネーション',
      sources: [
        'demos/search-pagination.tsx',
        'components/custom-pagination.tsx',
      ],
      libraries: [
        {
          title: 'react-instantsearch-dom',
          url: 'https://www.npmjs.com/package/react-instantsearch-dom',
        },
      ],
    },
    {
      id: 'search-hits-per-page',
      title: 'ページごとの表示件数',
      sources: [
        'demos/search-hits-per-page.tsx',
        'components/custom-hits-per-page.tsx',
      ],
      libraries: [
        {
          title: 'react-instantsearch-dom',
          url: 'https://www.npmjs.com/package/react-instantsearch-dom',
        },
      ],
    },
    {
      id: 'search-autocomplete',
      title: 'オートコンプリート',
      sources: ['demos/search-autocomplete.tsx'],
      libraries: [
        {
          title: '@algolia/autocomplete-js',
          url: 'https://www.npmjs.com/package/@algolia/autocomplete-js',
        },
      ],
      docs: [
        {
          title: 'Creating a custom renderer',
          url: 'https://www.algolia.com/doc/ui-libraries/autocomplete/guides/creating-a-renderer/',
        },
      ],
    },
    {
      id: 'search-infinite-hits',
      title: '無限スクロール',
      sources: [
        'demos/search-infinite-hits.tsx',
        'components/custom-infinite-hits.tsx',
      ],
      libraries: [
        {
          title: 'react-instantsearch-dom',
          url: 'https://www.npmjs.com/package/react-instantsearch-dom',
        },
      ],
      docs: [
        {
          title: '',
          url: 'https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/infinite-scroll/react/',
        },
        {
          title: '',
          url: 'https://developer.mozilla.org/ja/docs/Web/API/Intersection_Observer_API',
        },
      ],
    },
  ],
};
