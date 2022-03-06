import toast from 'react-hot-toast';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Site } from '../lib/site';
import { useRouter } from 'next/router';

const DocHeading = ({ id, children, level }: any) => {
  const Heading = ('h' + (level + 1)) as keyof JSX.IntrinsicElements;
  const router = useRouter();

  return (
    <Heading className="group relative">
      <span id={id} className="absolute -top-6"></span>
      <span>{children}</span>
      <CopyToClipboard
        text={Site.origin + '/' + router.query.id + '#' + id}
        onCopy={() => {
          toast.success('リンクをコピーしました');
        }}
      >
        <a
          className="text-gray-400 hidden group-hover:inline-block ml-1"
          href={`#${id}`}
        >
          #
        </a>
      </CopyToClipboard>
    </Heading>
  );
};

export default DocHeading;
