import { useSelector } from "react-redux";
import { removeMessage, updateMessage, createMessage } from "../../store/messages";
import { AppState } from "../../types/app";
import { useActions } from "./use-actions";

export const useMessages = () => {
  const messages = useSelector((state: AppState) => state.messages);

  const actions = useActions({
    onUpdate: updateMessage,
    onDelete: removeMessage,
    onCreate: createMessage,
  });

  return {
    messages,
    ...actions,
  };
};
