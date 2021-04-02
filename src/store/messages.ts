import { createAction, createReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../types/app";
import { Message } from "../types/message";

const initialState: Message[] = [];

// enum ActionType {
//   SET_MY_ACCOUNT = `SET_MY_ACCOUNT`,
//   CREATE_MESSAGE = `CREATE_MESSAGE`,
//   SET_MESSAGES = `SET_MESSAGES`,
//   UPDATE_MESSAGE = `UPDATE_MESSAGE`,
//   REMOVE_MESSAGE = `REMOVE_MESSAGE`,
// };

// type SetMessageAction = {
//   type: ActionType.SET_MESSAGES;
//   payload: Message[];
// }

// type SetMyAccountAction = {
//   type: ActionType.SET_MY_ACCOUNT;
//   payload: {
//     id: number;
//     name: string;
//   };
// }

// type CreateMessageAction = {
//   type: ActionType.CREATE_MESSAGE;
//   payload: {
//     id: number;
//     text: string;
//     date: number;
//   };
// }

// type UpdateMessageAction = {
//   type: ActionType.UPDATE_MESSAGE;
//   payload: Message;
// }

// type RemoveMessageAction = {
//   type: ActionType.REMOVE_MESSAGE;
//   payload: {
//     id: number;
//   };
// }

// type Action = SetMessageAction | CreateMessageAction | SetMyAccountAction | UpdateMessageAction | RemoveMessageAction;

// export const setMessages = (messages: Message[]): SetMessageAction => ({
//   type: ActionType.SET_MESSAGES,
//   payload: messages,
// });


// const createAction2 = (type) => (payload) => ({
//   type,
//   payload,
// })
// const newAction = createAction2('NEW_ACTION');
// newAction([]) // {type: 'NEW_ACTION', payload}


export const setMessages = createAction<Message[], 'SET_MESSAGES'>('SET_MESSAGES');

// export const setMyAccount = (name: string): SetMyAccountAction => ({
//   type: ActionType.SET_MY_ACCOUNT,
//   payload: {
//     id: Math.random(),
//     name,
//   },
// });

export const setMyAccount = createAction<string, 'SET_MY_ACCOUNT'>('SET_MY_ACCOUNT');

// export const createMessage = (text: string): CreateMessageAction => ({
//   type: ActionType.CREATE_MESSAGE,
//   payload: {
//     id: Math.random(),
//     text,
//     date: Date.now(),
//   },
// });

export const createMessage = createAsyncThunk(
  'CREATE_MESSAGE',
  async (text: string, {getState}): Promise<Message> => {
    const appState = getState() as AppState;

    const message: Message = {
      date: Date.now(),
      id: Math.random(),
      text,
      account: appState.myAccount,
    };

    return message;
  },
);

// export const updateMessage = (message: Message): UpdateMessageAction => ({
//   type: ActionType.UPDATE_MESSAGE,
//   payload: message,
// });

export const updateMessage = createAction<Message, 'UPDATE_MESSAGE'>('UPDATE_MESSAGE');

// export const removeMessage = (id: number): RemoveMessageAction => ({
//   type: ActionType.REMOVE_MESSAGE,
//   payload: {
//     id,
//   }
// });

export const removeMessage = createAction<number, 'REMOVE_MESSAGE'>('REMOVE_MESSAGE');

export const messagesReducer = createReducer(initialState, {
  [setMessages.type](messages, action: PayloadAction<Message[]>) {
    return action.payload;
  },
  [removeMessage.type](messages, action: PayloadAction<number>) {
    return messages.filter(message => message.id !== action.payload);
    // const index = state.messages.findIndex(message => message.id !== action.payload);
    // delete state.messages[index];
  },
  [updateMessage.type](messages, action: PayloadAction<Message>) {
    return messages.map(message => {
      if (message.id === action.payload.id) {
        return action.payload;
      }
      return message;
    })
  },
  [createMessage.fulfilled.type](messages, action: PayloadAction<Message>) {
    // state.messages = [...state.messages, message];
    messages.push(action.payload);
  },
});

// export const reducer = (state = initialState, action: Action) => {
//   switch (action.type) {
//     case ActionType.SET_MESSAGES:
//       return {
//         ...state,
//         messages: action.payload,
//       };
//     case ActionType.CREATE_MESSAGE:
//       const message = {
//         ...action.payload,
//         account: state.myAccount,
//       };
//       return {
//         ...state,
//         messages: [...state.messages, message],
//       };
//     case ActionType.REMOVE_MESSAGE:
//       return {
//         ...state,
//         messages: state.messages.filter(message => message.id !== action.payload.id)
//       };
//     case ActionType.SET_MY_ACCOUNT:
//       return {
//         ...state,
//         myAccount: action.payload,
//       };
//     case ActionType.UPDATE_MESSAGE:
//       return {
//         ...state,
//         messages: state.messages.map(message => {
//           if (message.id === action.payload.id) {
//             return action.payload;
//           }
//           return message;
//         })
//       };
//     default:
//       return state;
//   }
// };
