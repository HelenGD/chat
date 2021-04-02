import React, {ChangeEvent, SyntheticEvent} from 'react';
import {useState} from 'react';
import { TextArea } from '../textarea';
import './send-message.css';

type Props = {
  onSubmit: (text: string) => void;
};

 export function SendMessage(props: Props) {
  const {onSubmit} = props;
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length > 0) {
      onSubmit(value);
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.code === 'Enter' && value.length > 0) {
      e.preventDefault();
      e.stopPropagation();
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
      <TextArea
        autoFocus
        viewType="regular"
        placeholder="Введите сообщение"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
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
