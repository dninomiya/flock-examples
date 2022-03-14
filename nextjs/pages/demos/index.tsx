import type { NextPage } from 'next';
import { HiPlus } from 'react-icons/hi';
import GalleryLayout from '../../components/gallery-layout';
import GuideGridItem from '../../components/guide-grid-item';
import { DEMOS } from '../../lib/demos';

const DemoPage: NextPage = () => {
  return (
    <GalleryLayout>
      <div>
        <h2 className="text-2xl font-bold mt-4 mb-2">コース</h2>
        <p className="mb-4 opacity-60">
          ジャンル別のチュートリアルを参考に、オリジナルアプリやポートフォリオアプリの開発を行いましょう。
        </p>

        <div>
          <div className="grid sm:grid-cols-3 xl:grid-cols-6 gap-4">
            {DEMOS.map((demo) => (
              <GuideGridItem guide={demo} key={demo.id} />
            ))}

            <a
              className="block group"
              href="https://github.com/dninomiya/flock-examples/issues/new?assignees=dninomiya&labels=%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88&template=-----.md&title="
              target="_blank"
              rel="noreferrer"
            >
              <div className="aspect-video grid place-content-center border-2 border-dashed border-gray-300 dark:border-gray-700 transition-transform group-hover:scale-105 rounded-lg relative overflow-hidden">
                <div className="text-4xl text-gray-300 dark:text-gray-700">
                  <HiPlus />
                </div>
              </div>
              <p className="mt-2 text-sm opacity-40">リクエスト</p>
            </a>
          </div>
        </div>
      </div>
    </GalleryLayout>
  );
};

export default DemoPage;
