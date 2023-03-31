import { useState } from "react";
import useEventListener from "./useEventListener";

const usePressedKeys = () => {
  const [pressedKeys, setPressedKeys] = useState([]);

  useEventListener("keydown", e => {
    if (pressedKeys.includes(e.key)) return;
    setPressedKeys([...pressedKeys, e.key]);
  });

  useEventListener("keyup", e => {
    setPressedKeys(pressedKeys.filter(key => key !== e.key));
  });
  return pressedKeys;
};

export default usePressedKeys;
