import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { HiOutlineClipboard } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkGfm from 'remark-gfm';
import DocAlert from '../components/doc-alert';

import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff';
import git from 'react-syntax-highlighter/dist/cjs/languages/prism/git';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import DocHeading from '../components/doc-heading';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('git', git);
SyntaxHighlighter.registerLanguage('diff', diff);

const DEFAULT_MARKDOWN = `
# タイトル

テキストテキスト[リンク](https://flock.codes)テキストテキスト

\`\`\`js:ファイル名.js
const demo = 111;
\`\`\`

:::info
ノートブロック
:::

- リスト
- リスト
- リスト

![](/images/ogp.png)

## テーブル

xxx|xxx
---|---
xxx|xxx
xxx|xxx
`;

const MarkdownRender = () => {
  const [markdown, setMarkdown] = useState<string>(DEFAULT_MARKDOWN);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <textarea
        className="bg-transparent rounded border p-4"
        defaultValue={DEFAULT_MARKDOWN}
        onChange={(e) => setMarkdown(e.currentTarget.value)}
      />
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkDirective,
          remarkDirectiveRehype,
          remarkBreaks,
        ]}
        rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
        className="prose prose-pre:p-0 dark:prose-invert prose-a:text-pink-600"
        transformImageUri={(src) => {
          if (process.env.NODE_ENV === 'production') {
            return `/stripe-doc` + src;
          } else {
            return src;
          }
        }}
        components={{
          ['info' as keyof JSX.IntrinsicElements]: DocAlert,
          ['warning' as keyof JSX.IntrinsicElements]: DocAlert,
          ['important' as keyof JSX.IntrinsicElements]: DocAlert,
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
          h1: DocHeading,
          h2: DocHeading,
          h3: DocHeading,
          h4: DocHeading,
          h5: DocHeading,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const fileName = className?.split(':')?.[1] || '';
            return inline ? (
              <code {...props}>{children}</code>
            ) : (
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
                  // TODO: remote any https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/439
                  style={vscDarkPlus as any}
                  language={match?.[1] || 'plane'}
                  PreTag="div"
                  customStyle={{ margin: 0 }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRender;
