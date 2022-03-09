import { logEvent } from 'firebase/analytics';
import React from 'react';
import { ga } from '../firebase/client';

const GaEvents = () => {
  const sendEvent = (target: 'cat' | 'dog') => {
    const name = target === 'cat' ? '猫' : '犬';

    logEvent(ga, 'select_content', {
      content_type: 'demo',
      id: target,
      name,
    });
    alert(`${name}のクリックを計測しました`);
  };

  return (
    <div>
      <h1>犬と猫どっちが好きですか？</h1>
      <div className="flex mt-4 gap-4">
        <button
          className="px-2 py-1 rounded border"
          onClick={() => sendEvent('dog')}
        >
          🐶 犬
        </button>
        <button
          className="px-2 py-1 rounded border"
          onClick={() => sendEvent('cat')}
        >
          🐱 猫
        </button>
      </div>
    </div>
  );
};

export default GaEvents;
