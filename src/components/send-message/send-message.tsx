import React, {ChangeEvent, SyntheticEvent} from 'react';
import {useState} from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../../reducer/chat-reducer';
import './send-message.css';

type Props = {
  onSubmit: (text: string) => void;
};

 function SendMessage(props: Props) {
  const {onSubmit} = props;
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length > 0) {
      onSubmit(value);
      setValue("");
    }
  };

  // const pressEsc = (e) => {
  //   if(e.keyCode === 27) {
  //     handleSubmit(e)
  //   }
  // }

  return (
    <form
      onSubmit={handleSubmit}
      className="send-message-form"
      >
      <input
        autoFocus
        type="text"
        placeholder="Введите сообщение"
        onChange={handleChange}
        value={value}
      />
      <button 
        type="submit"
        className="button-submit"
        disabled={!value}
        >Отправить</button>
    </form>
  );
}


export const SendMessageContainer = connect(null, {
  onSubmit: createMessage,
})(SendMessage);
export {SendMessageContainer as SendMessage};
