import { useEffect, useRef } from "react";

type CallbackFunction = () => void;

export const useTimeout = (
  callback: CallbackFunction,
  delay: number | null
) => {
  const savedCallback = useRef<CallbackFunction | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }, delay);

    return () => clearTimeout(id);
  }, [delay]);
};
