import algoliasearch from 'algoliasearch';
import * as functions from 'firebase-functions';

export const algoliaClient = algoliasearch(
  functions.config().algolia.id as string,
  functions.config().algolia.key as string
);
