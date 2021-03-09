import React from 'react';
import { MessageList } from '../message-list/message-list';
import {SendMessage} from '../send-message/send-message';
import { Header } from '../header/header';
import { SaveName} from '../save-name/save-name';
import { connect } from 'react-redux';
import './app.css';
import {MyAccount} from '../../types/my-account';
import { AppState } from '../../types/app';

type Props = {
  myAccount: MyAccount;
};

 function App(props: Props) {
  const {myAccount} = props;
  return (
    <div className="app">
      <div className="main">
        <Header />
        {myAccount 
          ? (
            <div>
              <MessageList />
              <SendMessage />
            </div> 
          )
          : <SaveName />
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  myAccount: state.myAccount
});

export const AppContainer = connect(mapStateToProps)(App);
export {AppContainer as App};
