import * as functions from 'firebase-functions';
import { algoliaClient } from './algolia';

const index = algoliaClient.initIndex('posts');

export const syncPostToAlgolia = functions
  .region('asia-northeast2')
  .firestore.document('posts/{postId}')
  .onWrite(async (change, context) => {
    const postId = context.params.postId;
    const newPost = change.after.data();

    await index.deleteBy({
      filters: `id:${postId}`,
    });

    if (newPost) {
      const sections = newPost.body.split(/(?=<h2>)/gm);
      const records = sections.map((section: string) => {
        return {
          ...newPost,
          body: section,
        };
      });

      return index.saveObjects(records, {
        autoGenerateObjectIDIfNotExist: true,
      });
    }

    return;
  });
