import React from 'react';
import toast from 'react-hot-toast';
import Button from '../components/button';

const Toast = () => {
  const saveData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('foo');
      }, 3000);
    });
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => toast('通知')}>通知</Button>
      <Button onClick={() => toast.success('成功')}>成功</Button>
      <Button onClick={() => toast.error('エラー')}>エラー</Button>
      <Button
        onClick={() =>
          toast.promise(saveData(), {
            loading: '保存中...',
            success: '保存成功',
            error: 'エラーが発生しました',
          })
        }
      >
        ローディング
      </Button>
    </div>
  );
};

export default Toast;
