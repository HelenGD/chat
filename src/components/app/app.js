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
  const [messages, setMessages] = useState([
    {
      id: 1,
      senderName: "Коля",
      text: "Привет!"
  },
  {
      id: 2,
      senderName: "Женя",
      text: "Салют"
  }
  ]);

  const [disabled, setDisabled] = useState(true);

  const handleAdd = (text) => {
    if (text.length > 0) {
        const newMessage = {
            id: Math.random(),
            senderName: "Женя",
            text: text
        };
        const newMessages = [...messages, newMessage ];
        setMessages(newMessages);
    }
};
  return (
    <div className="app">
      <Title />
      <MessageList messages={messages}/>
      <SendMessage onSubmit={handleAdd} disabled={disabled}/>
    </div>
  );
}

