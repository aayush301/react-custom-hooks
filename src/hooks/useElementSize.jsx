import { useCallback, useState } from "react";
import useEventListener from "./useEventListener";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

// Credits: https://usehooks-ts.com/react-hook/use-element-size
const useElementSize = () => {
  const [ref, setRef] = useState(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const handleChangeInSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useEventListener("resize", handleChangeInSize);

  useIsomorphicLayoutEffect(() => {
    handleChangeInSize();
  }, [ref?.offsetWidth, ref?.offsetHeight]);

  return [setRef, size];
};

export default useElementSize;
