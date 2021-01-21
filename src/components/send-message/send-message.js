import {useState} from 'react'
import './send-message.css';

export function SendMessage(props) {
  const {onSubmit, disabled} = props;
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      onSubmit(value);
      setValue("");
    }
  };

  const pressEsc = (e) => {
    if(e.keyCode === 27) {
      handleSubmit(e)
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="send-message-form"
      >
      <input
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