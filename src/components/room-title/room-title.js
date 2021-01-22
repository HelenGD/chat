import './room-title.css';

export function RoomTitle(props){
  const {chatName} = props;
    return (
        <div className="RoomTitle">
            <h1>{chatName}</h1>
        </div>
    );
}
