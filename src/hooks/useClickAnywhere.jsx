import useEventListener from "./useEventListener";

const useClickAnywhere = handler => {
  useEventListener("click", handler, window);
};

export default useClickAnywhere;
