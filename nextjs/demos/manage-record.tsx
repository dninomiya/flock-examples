import { collection, doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../firebase/client';
import { Post } from '../types/post';

type FormValue = {
  title: string;
  body: string;
  tags: string[];
};

const ManageRecord = () => {
  const { register, handleSubmit, reset } = useForm<FormValue>();

  const submit = (post: FormValue) => {
    // NOTE: 送信されないようコメントアウトしています
    // const newPostRef = doc(collection(db, 'posts'));
    // return setDoc(newPostRef, {
    //   ...post,
    //   createdAt: Date.now(),
    //   id: newPostRef.id,
    // } as Post).then(() => {
    //   alert('送信しました。数分以内に検索結果に反映されます。');
    //   reset();
    // });

    alert('送信しました。数分以内に検索結果に反映されます。');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(submit)}>
      <p className="opacity-60">これはデモなので実際に記事は作成されません。</p>
      <h2 className="font-bold text-xl">記事を投稿</h2>
      <div>
        <label>
          <span>タイトル*</span>
          <input
            required
            type="text"
            className="bg-transparent block rounded"
            autoComplete="off"
            {...register('title', {
              required: true,
            })}
          />
        </label>
      </div>
      <div>
        <label>
          <span>本文*</span>
          <textarea
            required
            className="bg-transparent block rounded w-full"
            {...register('body', {
              required: true,
            })}
            rows={4}
          />
        </label>
      </div>
      <div>
        <label>
          <span>タグ*</span>
          <input
            type="text"
            required
            className="bg-transparent block rounded w-full"
            placeholder="IT, 医療"
            autoComplete="off"
            {...register('tags', {
              required: true,
              setValueAs: (v) => v?.split(',').filter(Boolean) || [],
            })}
          />
        </label>
        <p className="text-xs mt-1 opacity-40">カンマ区切り</p>
      </div>

      <button className="border px-3 py-1 rounded">送信</button>
    </form>
  );
};

export default ManageRecord;
