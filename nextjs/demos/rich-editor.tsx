import Image from '@tiptap/extension-image';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import RichEditorToolbar from './rich-editor-toolbar';

const RichEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: '<p>Hello World!</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm m-5 focus:outline-none dark:prose-invert',
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="rounded-md overflow-hidden border-gray-500 border-2 bg-white dark:bg-gray-800">
      <RichEditorToolbar editor={editor} />
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default RichEditor;
