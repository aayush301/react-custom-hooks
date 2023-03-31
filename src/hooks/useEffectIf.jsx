import { useEffect } from "react";

const useEffectIf = (condition, handler, deps) => {
  useEffect(() => {
    if (condition) handler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useEffectIf;
