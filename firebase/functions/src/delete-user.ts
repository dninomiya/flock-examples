import * as functions from 'firebase-functions';
import { getAuth } from 'firebase-admin/auth';

const auth = getAuth();

export const deleteUser = functions
  .region('asia-northeast2')
  .https.onCall((_, context) => {
    if (context.auth?.uid) {
      return auth.deleteUser(context.auth?.uid);
    } else {
      throw new functions.https.HttpsError(
        'unauthenticated',
        '認証されていません'
      );
    }
  });
