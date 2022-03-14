import { Category } from '../types/category';

export const FormCategory: Category = {
  title: 'フォーム',
  items: [
    {
      id: 'form',
      title: 'フォーム',
      sources: ['demos/form.tsx'],
      libraries: [
        {
          title: 'React Hook Form',
          url: 'https://www.npmjs.com/package/react-hook-form',
        },
      ],
      docs: [
        {
          title: 'React Hook Form',
          url: 'https://react-hook-form.com/jp/',
        },
      ],
    },
    {
      id: 'form-guard',
      title: 'フォームガード',
      sources: ['demos/form-guard.tsx', 'lib/form-guard.ts'],
      libraries: [
        {
          title: 'React Hook Form',
          url: 'https://www.npmjs.com/package/react-hook-form',
        },
      ],
      docs: [
        {
          title: 'React Hook Form',
          url: 'https://react-hook-form.com/jp/',
        },
      ],
    },
    {
      id: 'dynamic-form',
      title: '動的フォーム',
      sources: ['demos/dynamic-form.tsx'],
      libraries: [
        {
          title: 'React Hook Form',
          url: 'https://www.npmjs.com/package/react-hook-form',
        },
      ],
      docs: [
        {
          title:
            'useFieldArray | React Hook Form - Simple React forms validation',
          url: 'https://react-hook-form.com/api/usefieldarray/',
        },
      ],
    },
    {
      id: 'custom-input',
      title: 'カスタムフォーム',
      sources: ['demos/custom-input.tsx', 'components/input.tsx'],
    },
    {
      id: 'crop',
      title: 'トリミング',
      sources: ['demos/crop.tsx'],
      libraries: [
        {
          title: 'react-cropper',
          url: 'https://www.npmjs.com/package/react-cropper',
        },
      ],
      docs: [
        {
          title: 'react-cropper',
          url: 'https://github.com/react-cropper/react-cropper',
        },
        {
          title: 'Cropper.js',
          url: 'https://github.com/fengyuanchen/cropperjs',
        },
      ],
    },
    {
      id: 'textarea-auto-resize',
      title: 'テキストエリア自動リサイズ',
      sources: ['demos/textarea-auto-resize.tsx'],
      libraries: [
        {
          title: 'react-textarea-autosize',
          url: 'https://www.npmjs.com/package/react-textarea-autosize',
        },
      ],
      docs: [
        {
          title: 'react-textarea-autosize',
          url: 'https://github.com/Andarist/react-textarea-autosize#readme',
        },
      ],
    },
    {
      id: 'rich-editor',
      title: 'リッチエディター',
      sources: ['demos/rich-editor.tsx', 'demos/rich-editor-toolbar.tsx'],
      libraries: [
        {
          title: 'tiptap',
          url: 'https://www.npmjs.com/package/tiptap',
        },
      ],
      docs: [
        {
          title: 'Tiptap Editor',
          url: 'https://tiptap.dev/',
        },
        {
          title: 'ウェブで Cloud Storage を使ってみる',
          url: 'https://firebase.google.com/docs/storage/web/start?hl=ja',
        },
      ],
    },
    {
      id: 'markdown-editor',
      title: 'マークダウンエディター',
      sources: ['demos/markdown-editor.tsx', 'styles/markdown-editor.scss'],
      libraries: [
        {
          title: 'React SimpleMDE (EasyMDE) Markdown Editor',
          url: 'https://www.npmjs.com/package/react-simplemde-editor',
        },
        {
          title: 'EasyMDE - Markdown Editor',
          url: 'https://www.npmjs.com/package/easymde',
        },
      ],
      docs: [
        {
          title: '',
          url: 'https://www.npmjs.com/package/easymde',
        },
        {
          title: '',
          url: 'https://www.npmjs.com/package/react-simplemde-editor',
        },
      ],
    },
    {
      id: 'tag-select',
      title: 'タグ入力',
      ready: true,
    },
    {
      id: 'image-upload',
      title: '画像アップロード',
      ready: true,
    },
  ],
};
