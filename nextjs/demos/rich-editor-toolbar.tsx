import { Editor } from '@tiptap/react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ChangeEvent } from 'react';
import { storage } from '../firebase/client';
import {
  MdCode,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatStrikethrough,
  MdHorizontalRule,
  MdImage,
  MdRedo,
  MdTitle,
  MdUndo,
} from 'react-icons/md';

const RichEditorToolbar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null;
  }

  const setImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];

    if (!file) {
      return;
    }

    const storageRef = ref(storage, `article/${Date.now()}`);
    const result = await uploadBytes(storageRef, file);
    const src = await getDownloadURL(result.ref);

    editor.commands.setImage({ src });
  };

  return (
    <div className="flex flex-wrap gap-2 text-2xl border-b p-4 border-gray-600">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={!editor.isActive('bold') ? 'opacity-20' : ''}
      >
        <MdFormatBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={!editor.isActive('italic') ? 'opacity-20' : ''}
      >
        <MdFormatItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={!editor.isActive('strike') ? 'opacity-20' : ''}
      >
        <MdFormatStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={!editor.isActive('code') ? 'opacity-20' : ''}
      >
        <MdCode />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={!editor.isActive('bulletList') ? 'opacity-20' : ''}
      >
        <MdFormatListBulleted />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={!editor.isActive('orderedList') ? 'opacity-20' : ''}
      >
        <MdFormatListNumbered />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          !editor.isActive('heading', { level: 1 }) ? 'opacity-20' : ''
        }
      >
        <MdTitle />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={!editor.isActive('blockquote') ? 'opacity-20' : ''}
      >
        <MdFormatQuote />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <MdHorizontalRule />
      </button>
      <label>
        <MdImage />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={setImage}
        />
      </label>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <MdUndo />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <MdRedo />
      </button>
    </div>
  );
};

export default RichEditorToolbar;
