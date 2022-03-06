import { Switch } from '@headlessui/react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect } from 'react';
import {
  Control,
  Controller,
  Noop,
  useController,
  useForm,
} from 'react-hook-form';
import Input from '../components/input';

const FormWithUiLibrary = () => {
  const { control, watch, register } = useForm({
    defaultValues: {
      term: false,
      name: '',
      body: 'xxx',
    },
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <form className="space-y-6">
        <div>
          <h2>Headless UI</h2>
          <Controller
            name="term"
            control={control}
            render={({ field }) => (
              <Switch
                checked={field.value}
                onBlur={field.onBlur}
                onChange={field.onChange}
                className={`${
                  field.value ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">利用規約</span>
                <span
                  className={`${
                    field.value ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            )}
          ></Controller>
        </div>

        <div>
          <h2>カスタムコンポーネント</h2>
          <Input type="text" autoComplete="off" {...register('name')} />
        </div>

        <div>
          <h2>Tiptap</h2>
          <Controller
            name="body"
            control={control}
            render={({ field }) => (
              <TiptapEditor
                value={field.value}
                onBlur={field.onBlur}
                onChange={field.onChange}
              />
            )}
          ></Controller>
        </div>
      </form>
      <div>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default FormWithUiLibrary;

const TiptapEditor = ({
  value,
  onChange,
  onBlur,
}: {
  value: string;
  onChange: (data: string) => void;
  onBlur: Noop;
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate({ editor }) {
      onChange(editor.isEmpty ? '' : editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'p-2 rounded-md border border-gray-400',
      },
    },
  });

  useEffect(() => {
    editor?.commands?.setContent(value);
  }, [editor]);

  return <EditorContent onBlur={onBlur} editor={editor} />;
};
