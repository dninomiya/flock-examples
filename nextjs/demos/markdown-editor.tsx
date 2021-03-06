import React, { useCallback, useMemo, useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase/client';

const MarkdownEditor = () => {
  const [_, setValue] = useState<string>();

  const uploadImage = async (file: File): Promise<string> => {
    const imageRef = ref(storage, `images/markdown-editor/${Date.now()}`);
    await uploadBytes(imageRef, file);
    return getDownloadURL(imageRef);
  };

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  const options = useMemo(() => {
    return {
      toolbar: [
        'bold',
        'italic',
        'heading',
        '|',
        'quote',
        'unordered-list',
        'ordered-list',
        '|',
        'link',
        'image',
      ],
      status: false,
      spellChecker: false,
      imageUploadFunction(file, onSuccess) {
        if (file.type.match('image')) {
          uploadImage(file).then((url) => onSuccess(url));
        }
      },
    } as EasyMDE.Options;
  }, []);

  return (
    <div className="relative">
      <SimpleMDE onChange={onChange} options={options} />
    </div>
  );
};

export default MarkdownEditor;
