import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import {messagesReducer, setMessages} from './messages';
import {myAccountReducer} from './my-account';

export const reducer = combineReducers({
  messages: messagesReducer,
  myAccount: myAccountReducer,
});

const messages = JSON.parse(localStorage.getItem('messages') || '[]');

export const preloadedState = {
  messages,
  myAccount: null!,
};

export const store = configureStore({
  preloadedState,
  reducer,
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

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
