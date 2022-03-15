import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { HiClipboard, HiExternalLink } from 'react-icons/hi';
import { SiFirebase, SiGithub, SiNextdotjs } from 'react-icons/si';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Site } from '../../lib/site';
import { Guide } from '../../types/guide';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);

type Props = {
  guide: Guide;
  demoExists: boolean;
  sources: {
    fileName: string;
    source: string;
  }[];
};

const GuideDemoAndSourceViewer = ({ guide, demoExists, sources }: Props) => {
  const [Demo, setDemo] = useState<any>();
  const router = useRouter();

  const activeFileName = useMemo(() => {
    if (sources.find((item) => item.fileName === router.query.file)) {
      return router.query.file as string;
    }

    return sources[0]?.fileName;
  }, [router.query.file, sources]);

  const activeSource = useMemo(() => {
    return (
      sources?.find((item) => item.fileName === activeFileName)?.source ||
      sources[0]?.source
    );
  }, [activeFileName, sources]);

  useEffect(() => {
    if (router.query.id) {
      const DynamicComponent = dynamic(
        () => import(`../../demos/${router.query.id}`)
      );

      setDemo(DynamicComponent);
    }
  }, [router.query.id]);

  return (
    <div className="relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25 border border-black/5 dark:border-white/5 mb-6">
      <div className="absolute -inset-5 bg-grid opacity-10 dark:opacity-5"></div>
      <div className="dark:bg-slate-700/10 bg-slate-100/40 inset-0 absolute"></div>
      {demoExists && Demo && (
        <div className="relative p-6 lg:p-10">
          <Demo />
        </div>
      )}
      {Boolean(guide.sources?.length) && (
        <div className="shadow overflow-hidden relative">
          <div className="flex bg-gray-900 gap-px flex-wrap">
            {guide.sources?.map((fileName) => (
              <Link
                key={fileName}
                shallow
                replace
                href={{
                  query: {
                    ...router.query,
                    file: fileName,
                  },
                }}
              >
                <a
                  className={classNames(
                    'px-3 py-2 relative shadow flex items-center space-x-1.5',
                    fileName === activeFileName
                      ? 'z-10 bg-[#1e1e1e] text-gray-200 dark:text-gray-300'
                      : 'bg-gray-800 text-gray-500'
                  )}
                >
                  <span
                    className={fileName !== activeFileName ? 'opacity-40' : ''}
                  >
                    {/^..\/firebase\/functions/.test(fileName) ? (
                      <SiFirebase className="text-[#FFCA28]" />
                    ) : (
                      <SiNextdotjs className="text-white" />
                    )}
                  </span>
                  <span className="whitespace-nowrap">
                    {fileName.replace('../', '')}
                  </span>
                </a>
              </Link>
            ))}
          </div>
          <div className="relative z-20">
            <SyntaxHighlighter
              language={activeFileName?.match(/[^.]+$/)?.[0]}
              style={vscDarkPlus}
              showLineNumbers
              wrapLines
              showInlineLineNumbers
              customStyle={{ margin: 0 }}
            >
              {activeSource}
            </SyntaxHighlighter>

            <div className="flex space-x-4 items-center justify-end bg-[#1e1e1e] pr-4 pb-2">
              <CopyToClipboard
                text={activeSource}
                onCopy={() => toast.success('コピーしました')}
              >
                <button className="inline-flex space-x-2 items-center text-sm hover:bg-gray-700 p-2 rounded right-4 opacity-60">
                  <HiClipboard className="text-white" />
                  <span>コピー</span>
                </button>
              </CopyToClipboard>
              <a
                href={`${Site.github}/blob/main/nextjs/${activeFileName}`}
                target="_blank"
                className="flex space-x-2 items-center opacity-60"
                rel="noreferrer"
              >
                <SiGithub className="text-white" />
                <span>{activeFileName?.replace('../', '')}</span>
                <HiExternalLink />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuideDemoAndSourceViewer;
