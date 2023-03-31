import { useEffect, useRef } from "react";

const useInterval = (handler, delay = 1000) => {
  const savedHandler = useRef(() => {});

  useEffect(() => {
    savedHandler.current = handler;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const intervalId = window.setInterval(savedHandler, delay);
    return () => clearInterval(intervalId);
  }, [delay]);
};

export default useInterval;
