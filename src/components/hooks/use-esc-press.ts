import { useEffect } from "react";

type AnyFunction = (...args: any[]) => any;

export const useEscPress = <F extends AnyFunction>(callback: F) => {
  useEffect(
    () => {
      const handler = (e: KeyboardEvent) => {
        if (e.key.toLowerCase() === 'escape') {
          callback(e);
        }
      };

      window.addEventListener('keydown', handler);

      return () => {
        window.removeEventListener('keydown', handler);
      };
    },
    [callback],
  );
};
