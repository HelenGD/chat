import React, { FC } from 'react';
import { useMessages } from '../hooks/use-messages';
import { MessageList } from '../message-list/message-list';
import { SendMessage } from '../send-message/send-message';

export const Main: FC = () => {
  const {
    onCreate,
  } = useMessages();

  return (
    <div>
    <MessageList />
    <SendMessage onSubmit={onCreate} />
  </div>
  );
};
