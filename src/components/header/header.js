import { useState } from 'react';

import { RoomTitle } from '../room-title/room-title';
import './header.css';

export function Header(props) {
  const { myAccount, onUpdate } = props;

  const [name, setName] = useState(myAccount.name ? myAccount.name : myAccount.id);

  const handleChangeName = (e) => {
    setName(e.target.value)
    let visitor = { ...myAccount };
    visitor.name = e.target.value;
    onUpdate(visitor)
  }

  const { chatName } = props;
  return (
    <div>
      <p className="title">
        Чат
    </p>
      {/* <RoomTitle chatName={chatName} /> */}
      {/* {
        myAccount
        
        // ?
        // <div>Вы</div>
        //   // <input
        //   //   className='name-input'
        //   //   value={name}
        //   //   placeholder='Ваше имя'
        //   //   onChange={(e) => handleChangeName(e)}
        //   // />
        //   : null
      } */}
    </div>
  );
}

