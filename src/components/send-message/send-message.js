import './send-message.css';

export function SendMessage() {
  return (
    <form
      className="send-message-form"
      >
      <input
        type="text"
        placeholder="Введите сообщение"
      />
      <button type="submit"></button>
    </form>
  );
}