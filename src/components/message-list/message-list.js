// import { MessageItem } from '../member-item/member-item';
import './message-list.css';

export function MessageList(props) {
  const { messages, myAccount } = props;

  return (
    <div>
      <div className="messages-list">
        {messages.map(message => {
          return (
            <div
              className="message"
              key={message.id}
            >
              <div>
                {message.name}
              </div>
              <div className="message-text">
                {message.text}
              </div>
            </div>
          )
        })}

      </div>
      {/* {messages.map((message) => <MessageItem key={messages.id} messages={messages} myAccount={myAccount}/>)} */}

    </div>
  );
}


// const members = props.members.map((member) => 
//         <MemberItem key={member.uuid} member={member} me={props.me} />
//     );
