import { initializeApp, getApps } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const config = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_CLIENT_CONFIG as string
);

export let ga: Analytics;

if (!getApps()?.length) {
  initializeApp(config);

  if (typeof window !== 'undefined' && 'measurementId' in config) {
    ga = getAnalytics();
  }
}

export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const fns = getFunctions(undefined, 'asia-northeast2');
