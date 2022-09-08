import { useRouter } from 'next/router';
import { HiFlag } from 'react-icons/hi';
import { Site } from '../../lib/site';
import { Guide } from '../../types/guide';
import Breadcrumbs from '../breadcrumbs';

type Props = {
  guide: Guide;
};

const GuideHeader = ({ guide }: Props) => {
  const router = useRouter();

  return (
    <div className="py-6">
      <Breadcrumbs
        pages={[
          {
            name: guide.title,
          },
        ]}
      />
      <div className="mt-4 lg:flex items-center justify-between">
        <h1 className="font-bold text-xl flex-1">{guide.title}</h1>
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          <a
            href={`https://github.com/dninomiya/flock-examples/issues/new?assignees=dninomiya&labels=%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E5%A0%B1%E5%91%8A&title=「${
              guide.title
            }」に関する報告&body=url:%0D%0A${`${Site.origin}/${router.query.id}`}%0D%0A%0D%0A報告内容:%0D%0A`}
            target="_blank"
            className="flex items-center space-x-2 px-3 py-2 hover:bg-black/10 dark:hover:bg-black/40 opacity-60 rounded-lg"
            rel="noreferrer"
          >
            <HiFlag />
            <span>報告</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GuideHeader;
