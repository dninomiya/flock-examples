import classNames from 'classnames';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiPlus } from 'react-icons/hi';
import GuideGridItem from '../components/guide-grid-item';
import { Categories } from '../lib/features';

const Home: NextPage = () => {
  return (
    <div>
      <div className="py-4 bg-white dark:bg-black/30 border-b dark:border-gray-800 text-sm">
        <p className="container opacity-80">
          このドキュメントは Next.js、Tailwind
          CSS、Firebase、Algoliaをベースに設計されています。
        </p>
      </div>
      <div className="container mx-auto space-y-10">
        {Categories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-2xl font-bold py-4">{cat.title}</h2>
            <div className="grid sm:grid-cols-3 xl:grid-cols-6 gap-4">
              {cat.features.map((guide) => (
                <GuideGridItem guide={guide} key={guide.id} />
              ))}

              <a
                className="block group"
                href="https://github.com/flock-team/flock-examples/issues/new?assignees=nino-cast&labels=%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88&template=-----.md&title="
                target="_blank"
                rel="noreferrer"
              >
                <div className="aspect-video grid place-content-center border-2 border-dashed border-gray-300 dark:border-gray-700 transition-transform group-hover:scale-105 rounded-lg relative overflow-hidden">
                  <div className="text-4xl text-gray-300 dark:text-gray-700">
                    <HiPlus />
                  </div>
                </div>
                <p className="mt-1 opacity-40">リクエスト</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
