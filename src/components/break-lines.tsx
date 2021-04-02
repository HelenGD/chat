import { FC } from "react";

import React from 'react';

type Props = {
  value: string;
}

export const BreakLines: FC<Props> = (props) => {
  const {value} = props;
  const lines = value.split(/\r?\n/g);

  // 'line 1 line 2 ...'
  // ['line 1', 'line 2']

  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={String(index)}>
          {line}
          <br />
        </React.Fragment>
      ))}  
    </>
  );
};
