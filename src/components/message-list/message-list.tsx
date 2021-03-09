import React, {ChangeEvent} from 'react';
import { useState } from 'react';
import './message-list.css';
import format from 'date-fns/format';
import { connect } from 'react-redux';
import { updateMessage } from '../../reducer/chat-reducer';
import { removeMessage } from '../../reducer/chat-reducer';
import { AppState } from '../../types/app';
import { Message } from '../../types/message';
import { MyAccount } from '../../types/my-account';

type Props = {
  messages: Message[];
  myAccount: MyAccount;
  onUpdate: (editMessage: Message) => void;
  onDelete: (id: number) => void;
};

const isDiffDay = (dateFirst: number, dateSecond: number) => {
  return format(dateFirst, 'yyyy-MM-dd') !== format(dateSecond, 'yyyy-MM-dd');
}

function MessageList(props: Props) {
  const { messages, myAccount, onUpdate, onDelete } = props;
  const [editMessage, setEditMessage] = useState<Message | null>(null);
  console.log(messages)

  const handleEditMessage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!editMessage) {
      return;
    }
    
    setEditMessage({
      ...editMessage,
      text: e.target.value,
    })
  };

  const handleSave = () => {
    if (!editMessage) {
      return;
    }

    onUpdate(editMessage);
    setEditMessage(null);
  };
  return (
    <div>
      <div className="messages-list">
        {messages.map((message, index) => {
          return (
            <div key={message.id}>
              {index === 0 || isDiffDay(message.date, messages[index - 1].date)
                ? format(new Date(message.date), 'MMMM d')
                : null
              }
              <div
                className="message"
                data-owner={myAccount.id === message.account.id || null}
              >
                <div className="message-date">
                  {format(message.date, 'HH:mm')}
                </div>
                {editMessage && editMessage.id === message.id
                  ?
                  <input autoFocus className="message-input"
                    value={editMessage.text}
                    onChange={handleEditMessage}
                  />
                  :
                  <div className="message-text">
                    {message.text}
                  </div>
                }
                {myAccount.id === message.account.id && !editMessage && (
                  <button
                    className="button message-edit-button"
                    onClick={() => setEditMessage(message)}
                    type="button">
                    </button>
                )}
                {editMessage && editMessage.id === message.id && (
                  <button
                    className="button message-save-button"
                    type="button"
                    onClick={handleSave}
                  >
                  </button>
                )}
                <button className="button message-item-button" onClick={() => onDelete(message.id)} type="button"></button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  messages: state.messages,
  myAccount: state.myAccount,
});

const mapDispatchToProps = {
  onUpdate: updateMessage,
  onDelete: removeMessage,
};

export const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList);
export { MessageListContainer as MessageList };