import { useState } from 'react';
import format from 'date-fns/format';

import { MessageList } from '../message-list/message-list';
import { SendMessage } from '../send-message/send-message';
import { Header } from '../header/header';
import {MemberList} from '../member-list/member-list'
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
    // {
    //   id: 1,
    //   name: "Лена",
    //   text: "Привет!",
    //   isOnline: true,
    // },
    // {
    //   id: 2,
    //   name: "Женя",
    //   text: "Салют",
    //   isOnline: false,
    // }
  ]);

  // let chatHistory = localStorage.setItem(messages, JSON.stringify(messages));
  // chatHistory = JSON.parse(localStorage.getItem(messages));

  // localStorage.getItem("messages")
  // let chatHistory = JSON.parse(localStorage.getItem("messages"));
  // localStorage.setItem("messages", JSON.stringify(chatHistory));

//  let localData = JSON.parse(localStorage.getItem("messages"));
//  localData = JSON.parse(localData);
//  console.log(localData)
  // localStorage.getItem(messages);
  // const chatHistory = JSON.parse(localStorage.getItem("messages"));
  const time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })
  // const date = new Date().toDateString();
  
  const [disabled, setDisabled] = useState(true);
  const [chatName, setChatName] = useState('Чат-комната');
  const [myAccount, setMyAccount] = useState({
    id: 3,
    name: "Elena",
    text: "",
    isOnline: true,
    time : time,
  });



  const handleAdd = (text) => {
    if (text.length > 0) {
      const newMessage = {
        id: Math.random(),
        name: myAccount.name,
        text: text,
        time : time,
      };
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);
    }
  };
  const makeChatHistory = (messages) => {
    let chatHistory = localStorage.setItem(messages, JSON.stringify(messages));
    chatHistory = JSON.parse(localStorage.getItem(messages));
    chatHistory.push(messages);
    localStorage.setItem(messages, JSON.stringify(chatHistory));
    console.log(chatHistory)
  }

  makeChatHistory(messages);

  const onUpdateVisitor = (visitor) => {
    setMyAccount({ myAccount: visitor })
  }

  const handleSwitchAccount = (name) => {
    setMyAccount({
      id: 3,
      name,
      text: "",
      isOnline: true,
    })
  }

  const accounts = messages.reduce((acc, message) => {
    acc[message.name] = {
      isOnline: true,
    };
    return acc;
  }, {
    Elena: {isOnline: true},
    Joe: {isOnline: true},
    Michael: {isOnline: true},
  });

  return (
    <div className="app">
      <div className="sidebar">
        <MemberList 
          accounts={accounts}
          myAccount={myAccount} 
          onClick={handleSwitchAccount}  
        />
      </div>
      <div className="main">
        <Header chatName={chatName} myAccount={myAccount} onUpdate={onUpdateVisitor} />
        <MessageList messages={messages} myAccount={myAccount} />
        <SendMessage onSubmit={handleAdd} disabled={disabled} />
      </div>
    </div>
  );
}

