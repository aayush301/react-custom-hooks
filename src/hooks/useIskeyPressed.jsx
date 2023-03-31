import { useState } from "react";
import useKeyListener from "./useKeyListener";

/**
 *
 * @param {string | string[] | Function} keyFilter
 */
const useIskeyPressed = keyFilter => {
  const [isKeyPressed, setisKeyPressed] = useState(false);
  useKeyListener({ keyFilter, handler: e => setisKeyPressed(true), event: "keydown" });
  useKeyListener({ keyFilter, handler: e => setisKeyPressed(false), event: "keyup" });
  return isKeyPressed;
};

export default useIskeyPressed;
