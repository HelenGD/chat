import React, {ChangeEvent} from 'react';
import { useState } from 'react';
import './message-list.css';
import format from 'date-fns/format';
import { Message } from '../../types/message';
import { useMessages } from '../hooks/use-messages';
import { useMyAccount } from '../hooks/use-my-account';
import { BreakLines } from '../break-lines';
import { TextArea } from '../textarea';
import { useEscPress } from '../hooks/use-esc-press';

const isDiffDay = (dateFirst: number, dateSecond: number) => {
  return format(dateFirst, 'yyyy-MM-dd') !== format(dateSecond, 'yyyy-MM-dd');
}

export function MessageList() {
  const {
    messages,
    onUpdate,
    onDelete,
  } = useMessages();

  const {
    myAccount,
  } = useMyAccount();

  const [editMessage, setEditMessage] = useState<Message | null>(null);

  const handleEditMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!editMessage) {
      return;
    }

    if (e.ctrlKey && e.code === 'Enter' && editMessage.text.length > 0) {
      e.stopPropagation();
      handleSave();
    }
  };

  useEscPress(() => {
    if (editMessage) {
      setEditMessage(null);
    }
  });

  return (
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
                    <div className="message-input">
                      <TextArea
                        autoFocus 
                        viewType="orange"
                        value={editMessage.text}
                        onChange={handleEditMessage}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                  :
                  <div className="message-text">
                    <BreakLines value={message.text} />
                  </div>
                }
                {myAccount.id === message.account.id && !editMessage && (
                  <button
                    className="button message-edit-button"
                    onClick={() => setEditMessage(message)}
                    type="button"
                  />
                )}
                {editMessage && editMessage.id === message.id && (
                  <button
                    className="button message-save-button"
                    type="button"
                    onClick={handleSave}
                  />
                )}
                <button 
                  className="button message-item-button" 
                  onClick={() => onDelete(message.id)} 
                  type="button"
                />
              </div>
            </div>
          )
        })}
      </div>
  );
}