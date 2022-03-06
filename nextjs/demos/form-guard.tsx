import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { HiBan, HiOutlineCheck } from 'react-icons/hi';
import { useFormGuard } from '../lib/form-guard';

const FormGuard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm();

  useFormGuard(isDirty);

  const submit = () => {
    alert('送信したので確認なく遷移できるようになります。');
    reset(undefined, {
      keepValues: true,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex items-center space-x-4 mb-4">
          <input
            className="rounded-full bg-transparent"
            type="text"
            {...register('name')}
            autoComplete="off"
          />
          <button className="">送信</button>
        </div>
      </form>
      <p className="flex items-center space-x-2">
        {isDirty ? (
          <>
            <HiBan className="text-red-500" />
            <span>確認なく離脱できません</span>
          </>
        ) : (
          <>
            <HiOutlineCheck className="text-lime-500" />
            <span>確認なく離脱できます</span>
          </>
        )}
      </p>

      <hr className="my-6" />

      <p className="mt-6 mb-2 text-sm">次のアクションを実行</p>
      <div className="space-x-6 flex">
        <Link href="/">
          <a className="">別のページへ離脱</a>
        </Link>
        <p className="opacity-40">ページをリロード</p>
        <p className="opacity-40">タブを閉じる</p>
      </div>
    </div>
  );
};

export default FormGuard;
