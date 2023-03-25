import { useEffect } from "react";

// Credits: https://usehooks-ts.com/react-hook/use-event-listener
const useEventListener = (eventName, handler, elementRef, options) => {
  useEffect(() => {
    if (!eventName || !handler) return;
    const targetElement = elementRef?.current ?? window;
    if (!targetElement || !targetElement.addEventListener) return;
    targetElement.addEventListener(eventName, handler, options);

    return () => {
      targetElement.removeEventListener(eventName, handler, options);
    };
  }, [eventName, elementRef, options, handler]);
};

export default useEventListener;
