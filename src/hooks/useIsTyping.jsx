import { useState } from "react";
import useDebounce from "./useDebounce";
import useEventListener from "./useEventListener";
import useUpdateEffect from "./useUpdateEffect";

const useIsTyping = ({ timeout = 1000, elementRef }) => {
  const [isTyping, setIsTyping] = useState(false);
  const [value, setValue] = useState("");

  useEventListener(
    "input",
    () => {
      setValue(elementRef?.current?.value);
    },
    elementRef
  );

  useUpdateEffect(() => {
    setIsTyping(true);
  }, [value]);

  useDebounce(
    () => {
      setIsTyping(false);
    },
    timeout,
    [value]
  );

  return isTyping;
};

export default useIsTyping;
