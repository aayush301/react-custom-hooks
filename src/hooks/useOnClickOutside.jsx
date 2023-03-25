import useEventListener from "./useEventListener";

// Credits: https://usehooks-ts.com/react-hook/use-on-click-outside
const useOnClickOutside = (ref, handler, mouseEvent = "mousedown") => {
  useEventListener(mouseEvent, e => {
    const el = ref?.current;
    if (!el || el.contains(e.target)) return;
    handler(e);
  });
};

export default useOnClickOutside;
