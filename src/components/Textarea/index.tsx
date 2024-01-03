import React, { TextareaHTMLAttributes } from 'react';
import StyleWrapper from '../StyleWrapper';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = ({ className, ...rest }: TextareaProps) => {
  return (
    <StyleWrapper>
      <textarea
        className={`block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:outline-none ${className}`}
        {...rest}
      />
    </StyleWrapper>
  );
};

export default TextArea;
