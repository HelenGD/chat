import { useState } from 'react';

import { MessageList } from '../message-list/message-list';
import { SendMessage } from '../send-message/send-message';
import { Title } from '../title/title';
import './app.css';

// const mocks = [
//   {
//       id: 1,
//       senderName: "Коля",
//       text: "Привет!"
//   },
//   {
//       id: 2,
//       senderName: "Женя",
//       text: "Салют"
//   }
// ]

export function App() {
  const [messages, setMessages] = useState(
    [
      {
          id: 1,
          senderName: "Коля",
          text: "Привет!"
      },
      {
          id: 2,
          senderName: "Женя",
          text: "Салют, Коля! Как дела?"
      }
    ]
  )
  return (
    <div className="app">
      <Title />
      <MessageList messages={messages}/>
      <SendMessage />
    </div>
  );
}

