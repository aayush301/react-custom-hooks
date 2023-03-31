import { useEffect, useState } from "react";
import useCanHover from "./useCanHover";

// Credits:
// - https://github.com/kitze/react-hanger/blob/master/src/useSizzyHooks.ts
// - https://github.com/streamich/react-use/blob/master/src/useMouse.ts
const useMousePosition = (elementRef, startTrack = true) => {
  const [mousePosition, setMousePosition] = useState({});
  const canHover = useCanHover();
  const targetElement = elementRef?.current ?? document.documentElement;

  useEffect(() => {
    if (!startTrack || !canHover) return;
    const onMouseMove = e => {
      const rect = targetElement.getBoundingClientRect();
      const ob = {
        pageX: e.pageX,
        pageY: e.pageY,
        clientX: e.clientX,
        clientY: e.clientY,
        offsetX: e.clientX - rect.left,
        offsetY: e.clientY - rect.top,
        containerPageX: e.pageX - e.clientX + rect.left,
        containerPageY: e.pageY - e.clientY + rect.top,
        containerClientX: rect.left,
        containerClientY: rect.top,
      };
      setMousePosition(ob);
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, [startTrack, canHover, targetElement]);

  return canHover ? mousePosition : {};
};

export default useMousePosition;
