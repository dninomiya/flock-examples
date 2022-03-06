import { initializeApp } from 'firebase-admin/app';

initializeApp();

export { deleteUser } from './delete-user';
export { syncPostToAlgolia } from './sync-post-to-algolia';
