import React, {ChangeEvent, SyntheticEvent} from 'react';

import './save-name.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import { setMyAccount } from '../../reducer/chat-reducer';

type Props = {
  onSubmit: (name: string) => void;
};


function SaveName(props: Props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSave = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length > 0) {
      onSubmit(value);
      setValue("");
    }
  };
  return (
    <form
      className="save-name-form"
      onSubmit={handleSave}
    >
      <input
        autoFocus
        type="text"
        placeholder="Введите имя"
        onChange={handleChange}
        value={value}
      />
      <button
        type="submit"
        className="button-submit"
        disabled={!value}
      >Сохранить</button>
    </form>
  );
}

export const SaveNameContainer = connect(null, {
  onSubmit: setMyAccount,
})(SaveName);
export { SaveNameContainer as SaveName };