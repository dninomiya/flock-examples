import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

if (!getApps()?.length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_CONFIG as string)),
  });
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
