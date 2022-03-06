import { httpsCallable } from 'firebase/functions';
import React from 'react';
import { fns } from '../firebase/client';

const DeleteAccount = () => {
  const deleteAccount = () => {
    const callabe = httpsCallable(fns, 'deleteUser');
    callabe()
      .then(() => {
        alert('アカウントを削除しました');
      })
      .catch(() => {
        alert('有効なユーザーでログインしてください');
      });
  };

  return (
    <div>
      <button className="px-4 py-2 rounded-md border" onClick={deleteAccount}>
        アカウントを削除
      </button>
    </div>
  );
};

export default DeleteAccount;
