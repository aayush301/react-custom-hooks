import { useState } from "react";
import useEventListener from "./useEventListener";

const useScrollPosition = elementRef => {
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => {
    const targetElement = elementRef?.current ?? document.documentElement;
    const scrollValue = targetElement.scrollTop;
    setScrollValue(scrollValue);
  };

  useEventListener("scroll", handleScroll, elementRef);
  return scrollValue;
};

export default useScrollPosition;
