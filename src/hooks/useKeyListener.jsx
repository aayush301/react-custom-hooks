import useEventListener from "./useEventListener";

const checkKey = (e, keyFilter) => {
  if (typeof keyFilter === "string") return e.key === keyFilter;
  if (typeof keyFilter === "function") return keyFilter(e);
  if (Array.isArray(keyFilter)) return keyFilter.includes(e.key);
  return false;
};

/**
 *
 * @param {{
 *  keyFilter: string | string[] | Function,
 *  handler,
 *  event: "keydown" | "keypress" | "keyup",
 *  elementRef,
 *  options
 * }} ob
 */
const useKeyListener = ({ keyFilter, handler, event = "keydown", elementRef, options }) => {
  const customHandler = e => {
    if (checkKey(e, keyFilter)) handler(e);
  };
  useEventListener(event, customHandler, elementRef, options);
};

export default useKeyListener;
