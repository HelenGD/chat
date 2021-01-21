import './message-list.css';

export function MessageList(props) {
  const {  messages } = props;
  return (
    <div className="messages-list">
      { messages.map(message => {
        return (
          <div 
            className="message"
            key={message.id}
            >
            <div>
              {message.senderName}
            </div>
            <div className="message-text">
              {message.text}
            </div>
          </div>
        )
      })}

    </div>
  );
}
