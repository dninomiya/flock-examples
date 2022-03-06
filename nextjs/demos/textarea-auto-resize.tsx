import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const TextareaAutoResize = () => {
  return (
    <div>
      <TextareaAutosize
        autoFocus
        minRows={2}
        className="border rounded-lg bg-transparent p-4"
      />
    </div>
  );
};

export default TextareaAutoResize;
