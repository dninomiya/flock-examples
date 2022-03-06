import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { HiClipboard } from 'react-icons/hi';

const Clipboard = () => {
  return (
    <div className="space-y-4">
      <div>
        <CopyToClipboard
          text="Flock Examples"
          onCopy={() => alert('Flock Examples という文字をコピーしました')}
        >
          <button className="inline-flex space-x-2 items-center text-sm hover:bg-gray-700 p-2 rounded right-4 opacity-60">
            <HiClipboard className="text-white" />
            <span>コピー</span>
          </button>
        </CopyToClipboard>
      </div>
      <input
        type="text"
        autoComplete="off"
        className="bg-transparent rounded"
        placeholder="貼り付けてみてください"
      />
    </div>
  );
};

export default Clipboard;
