import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
