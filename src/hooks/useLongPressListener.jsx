import { useCallback, useRef } from "react";

const isTouchEvent = e => "touches" in e;

const preventDefault = e => {
  if (!isTouchEvent(e)) return;
  if (e.touches.length < 2 && e.preventDefault) {
    e.preventDefault();
  }
};

const useLongPressListener = (callback, { isPreventDefault = true, delay = 300 } = {}) => {
  const timeout = useRef();
  const target = useRef();

  const start = useCallback(
    e => {
      if (isPreventDefault && e.target) {
        e.target.addEventListener("touchend", preventDefault, { passive: false });
        target.current = e.target;
      }
      timeout.current = setTimeout(() => callback(e), delay);
    },
    [callback, delay, isPreventDefault]
  );

  const clear = useCallback(() => {
    if (timeout.current) clearTimeout(timeout.current);
    if (isPreventDefault && target.current) {
      target.current.removeEventListener("touchend", preventDefault);
    }
  }, [isPreventDefault]);

  const props = {
    onMouseDown: e => start(e),
    onTouchStart: e => start(e),
    onMouseUp: clear,
    onMouseLeave: clear,
    onTouchEnd: clear,
  };
  return props;
};

export default useLongPressListener;
