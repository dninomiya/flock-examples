import { FC } from 'react';

const GalleryLayout: FC = ({ children }) => {
  return (
    <div>
      <div className="py-4 bg-white dark:bg-black/30 border-b dark:border-gray-800 text-sm">
        <p className="container opacity-80">
          すべてのドキュメントは Next.js、Tailwind
          CSS、Firebase、Algoliaをベースに設計されています。
        </p>
      </div>
      <div className="container mx-auto space-y-10 py-6">{children}</div>
    </div>
  );
};

export default GalleryLayout;
