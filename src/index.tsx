import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import {App} from './components/app/app';
import reportWebVitals from './reportWebVitals';
import {createStore, compose} from "redux";
import {reducer, setMessages} from './reducer/chat-reducer';


const messages = JSON.parse(localStorage.getItem('messages') || '[]');

export const initialState = {
  messages,
  myAccount: null,
};

const store = createStore(reducer,
  initialState,
  compose(
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f,
  ),
);

store.subscribe(() => {
  const {messages} = store.getState();
  localStorage.setItem('messages', JSON.stringify(messages));
});

window.addEventListener('storage', (e) => {
  if (e.key !== 'messages') {
    return;
  }

  const messages = JSON.parse(e.newValue || '[]');
  store.dispatch(setMessages(messages));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
