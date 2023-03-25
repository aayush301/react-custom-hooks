import { useState } from "react";
import useEventListener from "./useEventListener";

// Credits: https://usehooks-ts.com/react-hook/use-hover
const useIsHover = elementRef => {
  const [isHover, setIsHover] = useState(false);
  useEventListener("mouseenter", () => setIsHover(true), elementRef);
  useEventListener("mouseleave", () => setIsHover(false), elementRef);
  return isHover;
};

export default useIsHover;
