
import './member-item.css';

export function MemberItem(props) {
  const { messages, myAccount } = props;

  const getName = () => {
    let name = ''
    if (messages.id === myAccount.id) {
      name = myAccount.name
    }
    else {
      name = messages.name
    }
    return name;
  }
  return (
    <div className="member-item">
      <span>
        {getName()}
        {messages.id === myAccount.id && " (Вы) "}
      </span>
    </div>
  );
}