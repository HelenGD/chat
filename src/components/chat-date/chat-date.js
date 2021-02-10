import './chat-date.css';
import format from 'date-fns/format';

export function ChatDate(props){
  const {messages} = props;
    return (
        <div className="chat-date">
            <h1>{format(new Date(messages.date), 'MMMM d')}</h1>
        </div>
    );
}