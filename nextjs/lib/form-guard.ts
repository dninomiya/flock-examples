import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useFormGuard = (isDirty: boolean) => {
  const router = useRouter();
  const message = '編集内容がリセットされます、本当にページ遷移しますか？';

  const pageChangeHandler = () => {
    const answer = window.confirm(message);
    if (!answer) {
      throw 'routeChange aborted.';
    }
  };

  const beforeUnloadhandler = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = message;
  };

  useEffect(() => {
    if (isDirty) {
      router.events.on('routeChangeStart', pageChangeHandler);
      window.addEventListener('beforeunload', beforeUnloadhandler);
      return () => {
        router.events.off('routeChangeStart', pageChangeHandler);
        window.removeEventListener('beforeunload', beforeUnloadhandler);
      };
    }
  }, [isDirty, router]);
};
