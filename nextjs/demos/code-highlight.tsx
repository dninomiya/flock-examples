import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);

const code = `const demo = 'コードがハイライトされていることを確認してください。';
const getUser = () => demo;`;

const CodeHighlight = () => {
  return (
    <SyntaxHighlighter
      language="tsx"
      style={vscDarkPlus}
      showLineNumbers
      wrapLines
      showInlineLineNumbers
      customStyle={{ margin: 0 }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlight;
