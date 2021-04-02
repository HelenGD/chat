import { useSelector } from "react-redux";
import { setMyAccount } from "../../store/my-account";
import { AppState } from "../../types/app";
import { useActions } from "./use-actions";


export const useMyAccount = () => {
  const myAccount = useSelector((state: AppState) => state.myAccount);

  const actions = useActions({
    onSetMyAccount: setMyAccount,
  });

  return {
    myAccount,
    ...actions,
  };
};