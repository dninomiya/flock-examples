import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/button';

type FormData = {
  title: string;
  body: string;
  gender: 'male' | 'female';
  skills: {
    [keyName in SkillId]: boolean;
  };
};

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [result, setResult] = useState<FormData>();

  const submit = (data: FormData) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
        setResult(data);
        reset(undefined, {
          keepValues: true,
        });
      }, 1000)
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form onSubmit={handleSubmit(submit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-2">
            タイトル
          </label>
          <input
            id="title"
            autoComplete="off"
            type="text"
            className="bg-transparent rounded border"
            {...register('title', {
              required: '必須入力です',
              maxLength: {
                value: 80,
                message: '最大80文字です',
              },
            })}
          />
          <p className="text-sm opacity-50">
            {watch('title')?.length || 0} / 80
          </p>
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title?.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-2" htmlFor="body">
            本文
          </label>
          <textarea
            id="body"
            className="bg-transparent rounded border w-80 max-w-full"
            {...register('body', {
              required: '必須入力です',
              maxLength: {
                value: 400,
                message: '最大400文字です',
              },
            })}
          />
          <p className="text-sm opacity-50">
            {watch('body')?.length || 0} / 400
          </p>
          {errors.body && (
            <p className="text-red-500 text-sm">{errors.body?.message}</p>
          )}
        </div>

        <div>
          <h2 className="mb-2">性別</h2>
          <div className="flex space-x-4">
            {Genders.map((gender) => (
              <div className="flex gap-2 items-center" key={gender.id}>
                <input
                  id={gender.id}
                  type="radio"
                  value={gender.id}
                  {...register('gender', {
                    required: 'どちらか選択してください',
                  })}
                />
                <label htmlFor={gender.id}>{gender.label}</label>
              </div>
            ))}
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender?.message}</p>
          )}
        </div>

        <div>
          <h2 className="mb-2">スキル</h2>
          <div className="flex space-x-4">
            {Skills.map((skill) => (
              <div className="flex gap-2 items-center" key={skill.id}>
                <input
                  id={skill.id}
                  type="checkbox"
                  className="rounded"
                  {...register(`skills.${skill.id}`)}
                />
                <label htmlFor={skill.id}>{skill.label}</label>
              </div>
            ))}
          </div>
        </div>

        <div></div>

        <div className="flex space-x-4">
          <button
            type="button"
            className="opacity-40"
            onClick={() => {
              reset();
              setResult(undefined);
            }}
          >
            リセット
          </button>
          <Button disabled={isSubmitting}>送信{isSubmitting && '中'}</Button>
        </div>
      </form>
      <div>
        <h2>結果</h2>
        {result && (
          <pre className="border rounded p-4 border-gray-700 mt-2">
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default Form;

const Genders = [
  {
    id: 'male',
    label: '男性',
  },
  {
    id: 'female',
    label: '女性',
  },
];

const Skills = [
  {
    id: 'html',
    label: 'HTML',
  },
  {
    id: 'javascript',
    label: 'JavaScript',
  },
  {
    id: 'css',
    label: 'CSS',
  },
  {
    id: 'nextjs',
    label: 'Next.js',
  },
  {
    id: 'firebase',
    label: 'Firebase',
  },
] as const;

const SkillIds = Skills.map((item) => item.id);

type SkillId = typeof SkillIds[number];
