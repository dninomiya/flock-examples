import { useRouter } from 'next/router';
import { useAuth } from '../context/auth';

export const useRequireAuth = () => {
  const auth = useAuth();
  const router = useRouter();

  if (!auth.firebaseUser) {
    router.push('/login');
  }

  return auth;
};
