import { MyAccount } from "./my-account";

export type Message = {
  account: MyAccount;
  id: number;
  text: string;
  date: number;
};

