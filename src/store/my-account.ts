import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { MyAccount } from "../types/my-account";

const initialState: MyAccount = null!;

export const setMyAccount = createAction<string, 'SET_MY_ACCOUNT'>('SET_MY_ACCOUNT');

export const myAccountReducer = createReducer(initialState, {
  [setMyAccount.type](state, action: PayloadAction<string>) {
    return {
      id: Math.random(),
      name: action.payload,
    };
  },
});
