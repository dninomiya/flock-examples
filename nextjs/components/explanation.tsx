import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkBreaks from 'remark-breaks';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkGfm from 'remark-gfm';
import slug from 'rehype-slug';
import toast from 'react-hot-toast';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff';
import git from 'react-syntax-highlighter/dist/cjs/languages/prism/git';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';
import { HiOutlineClipboard } from 'react-icons/hi';
import DocLink from './doc-link';
import DocAlert from './doc-alert';
import DocHeading from './doc-heading';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('git', git);
SyntaxHighlighter.registerLanguage('diff', diff);

type Props = {
  markdown: string;
};

const Explanation = ({ markdown }: Props) => {
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[
          remarkBreaks,
          remarkGfm,
          remarkDirective,
          remarkDirectiveRehype,
        ]}
        rehypePlugins={[slug, rehypeAutolinkHeadings]}
        className="prose prose-pre:p-0 dark:prose-invert"
        transformImageUri={(src) => {
          if (process.env.NODE_ENV === 'production') {
            return `/stripe-doc` + src;
          } else {
            return src;
          }
        }}
        components={{
          a({ href, children }) {
            return <DocLink href={href!}>{children}</DocLink>;
          },
          pre({ children }) {
            return (
              <pre className="first:mt-0 last:mb-0 bg-transparent overflow-hidden shadow">
                {children}
              </pre>
            );
          },
          ['info' as keyof JSX.IntrinsicElements]: DocAlert,
          ['warning' as keyof JSX.IntrinsicElements]: DocAlert,
          ['important' as keyof JSX.IntrinsicElements]: DocAlert,
          h1: DocHeading,
          h2: DocHeading,
          h3: DocHeading,
          h4: DocHeading,
          h5: DocHeading,
          img({ src }) {
            return (
              <a href={src} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  className="rounded-md shadow overflow-hidden block"
                  alt=""
                />
              </a>
            );
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const fileName = className?.split(':')?.[1];
            return !inline && match ? (
              <div>
                <div className="flex items-center justify-between bg-[#323233] text-sm py-2 px-3 text-white">
                  <span className="opacity-60">{fileName}</span>
                  <CopyToClipboard
                    onCopy={() =>
                      toast.success('コピーしました', {
                        position: 'bottom-center',
                      })
                    }
                    text={String(children)}
                  >
                    <button>
                      <HiOutlineClipboard className="w-5 h-5 text-gray-500" />
                    </button>
                  </CopyToClipboard>
                </div>
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{ margin: 0 }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code {...props}>{children}</code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Explanation;
