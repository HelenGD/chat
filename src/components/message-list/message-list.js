// import { MessageItem } from '../member-item/member-item';
import './message-list.css';
import format from 'date-fns/format';
import { ChatDate } from '../chat-date/chat-date';
// import ru from 'date-fns/locale/ru';

export function MessageList(props) {
  const { messages, myAccount } = props;
  const currentDate = format(new Date(), 'MMMM d')
  return (
    <div>
  {/* {format(new Date(messages.date), 'MMMM d')} */} 
      <div className="messages-list">
      {messages.length > 0 ? 
            <div>{currentDate}</div>
           : ''}
        {messages.map(message => {
          return (
              <div
                className="message"
                key={message.id}
              >
                <div>
                  {message.name}
                </div>
                <div className="message-date">
                  {message.time}
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
{/* <div>{messages.date}</div> */}