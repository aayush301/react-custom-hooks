import { useEffect, useState } from "react";

const useOrientation = (initialState = { angle: 0, type: "" }) => {
  const [orientationState, setOrientationState] = useState(initialState); // {angle,type}

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleOrientationChange = () => {
      const { orientation } = window.screen;
      if (orientation) {
        const { angle, type } = orientation;
        setOrientationState({ angle, type });
      } else if (window.orientation !== undefined) {
        setOrientationState({
          angle: typeof window.orientation === "number" ? window.orientation : 0,
          type: "",
        });
      } else {
        setOrientationState(initialState);
      }
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    handleOrientationChange();

    return () => {
      window.addEventListener("orientationchange", handleOrientationChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return orientationState;
};

export default useOrientation;
