import { Picker, Emoji } from 'emoji-mart';
import { useState } from 'react';

const EmojiDemo = () => {
  const [emoji, setEmoji] = useState<string>('santa');

  return (
    <div>
      <div className="mb-4 leading-none">
        <Emoji emoji={emoji} native set="apple" size={80} />
      </div>
      <Picker
        title="絵文字を選択"
        onSelect={(data) => setEmoji(data.id as string)}
        theme="auto"
        set="apple"
      />
    </div>
  );
};

export default EmojiDemo;
