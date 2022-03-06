import React, { forwardRef, InputHTMLAttributes } from 'react';

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      className="border border-gray-400 bg-transparent px-2 py-1 rounded-md"
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
