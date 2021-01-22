import './member-list.css';


export function MemberList(props) {
  const { accounts, myAccount, onClick } = props;

  return (
    <div className="member-list">
      {Object.keys(accounts).map((name) => {
        return (
          <div
            className="member-item"
            key={name}
            onClick={() => onClick(name)}
          >
            <div>
              {name} {name === myAccount.name ? ' (Вы)' : ''}
              {accounts[name].isOnline && <span className="online">•</span>}
            </div>
          </div>
        )
      })}

    </div>
  );
}



