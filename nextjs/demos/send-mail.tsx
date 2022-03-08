import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  to: string;
  name: string;
};

const Mail = () => {
  const { handleSubmit, register } = useForm<FormData>();

  const submit = (data: FormData) => {
    fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((message) => alert(message));
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label>
        <span className="block">送信先</span>
        <input
          {...register('to', {
            required: true,
          })}
          type="email"
          autoComplete="email"
          required
          className="bg-transparent rounded border mt-1"
        />
      </label>
      <p className="mb-4 text-sm mt-2">
        必ず自分が所有するメールアドレスにしてください。あるいは
        <a
          href="https://sute.jp/"
          target="_blank"
          rel="noreferrer"
          className="text-pink-600"
        >
          テスト用のアドレスを作成
        </a>
        してください。
      </p>
      <label>
        <span className="block">名前</span>
        <input
          {...register('name', {
            required: true,
          })}
          type="text"
          autoComplete="name"
          className="bg-transparent rounded border mt-1"
          required
        />
      </label>
      <button className="block mt-6 w-max px-4 py-2 rounded border">
        送信
      </button>

      <div className="opacity-60 pt-6 border-t mt-10">
        <ul className="list-disc list-inside text-sm leading-relaxed">
          <li>
            メールアドレスはデモメール送信のみに使用するため、Flockからお知らせを送ったりFlockのデータベースに記録されることはありません。
          </li>
          <li>
            このデモではSendGridのフリープランが使われているため制限に達してメールが送信できない場合があります。
          </li>
          <li>
            使い捨てメールアドレスなど受け取るメーラーによってはHTMLメールが正しく表示できないことがあります。
          </li>
        </ul>
      </div>
    </form>
  );
};

export default Mail;
