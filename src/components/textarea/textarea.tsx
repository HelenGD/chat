import React, { FC, TextareaHTMLAttributes } from 'react';
import { BreakLines } from '../break-lines';
import './textarea.css';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  viewType: 'regular' | 'orange';
};

export const TextArea: FC<Props> = (props) => {
  const {
    viewType,
    ...textAreaProps
  } = props;

  const {
    value = '',
  } = textAreaProps;

  return (
    <div className="textarea-wrap">
      <div 
        className="textarea"
        data-type={viewType}
      >
        <BreakLines value={String(value)} />
      </div>
      <textarea
        {...textAreaProps}
        className="textarea textarea-control"
        data-type={viewType}
      />
    </div>
  );
}
