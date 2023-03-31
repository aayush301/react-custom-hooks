import { useEffect, useState } from "react";

// Credits: https://github.com/kitze/react-hanger/blob/master/src/useSizzyHooks.ts
const useCanHover = () => {
  const [canHover, setCanHover] = useState(true);
  useEffect(() => {
    window.addEventListener(
      "touchstart",
      function onFirstTouch() {
        setCanHover(false);
        window.removeEventListener("touchstart", onFirstTouch, false);
      },
      false
    );
  }, []);

  return canHover;
};

export default useCanHover;
