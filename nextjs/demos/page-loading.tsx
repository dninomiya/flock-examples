import { useRouter } from 'next/router';
import React from 'react';

const PageLoading = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.push(router.asPath)}>
      ページを再読み込み
    </button>
  );
};

export default PageLoading;
