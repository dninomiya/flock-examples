import type { NextPage } from 'next';
import { HiPlus } from 'react-icons/hi';
import GalleryLayout from '../../components/gallery-layout';
import GuideGridItem from '../../components/guide-grid-item';
import { Categories } from '../../lib/guides';

const GuidePage: NextPage = () => {
  return (
    <GalleryLayout>
      {Categories.map((cat) => (
        <div key={cat.title}>
          <h2 className="text-2xl font-bold py-4">{cat.title}</h2>
          <div className="grid sm:grid-cols-3 xl:grid-cols-6 gap-4">
            {cat.items.map((guide) => (
              <GuideGridItem guide={guide} key={guide.id} />
            ))}

            <div className="block group">
              <div className="aspect-video grid place-content-center border-2 border-dashed border-gray-300 dark:border-gray-700 transition-transform group-hover:scale-105 rounded-lg relative overflow-hidden">
                <div className="text-4xl text-gray-300 dark:text-gray-700">
                  <HiPlus />
                </div>
                <a
                  className="absolute inset-0"
                  href="https://github.com/dninomiya/flock-examples/issues/new?assignees=dninomiya&labels=%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88&template=-----.md&title="
                  target="_blank"
                  rel="noreferrer"
                />
              </div>
              <p className="mt-2 text-sm opacity-40">リクエスト</p>
            </div>
          </div>
        </div>
      ))}
    </GalleryLayout>
  );
};

export default GuidePage;
