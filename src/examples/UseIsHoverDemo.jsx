import React, { useRef } from "react";
import useIsHover from "../hooks/useIsHover";

const UseIsHoverDemo = () => {
  const eleRef = useRef(null);
  const isHover = useIsHover(eleRef);

  return (
    <>
      <h3>UseIsHover Demo</h3>
      <div
        ref={eleRef}
        style={{
          width: 150,
          height: 30,
          cursor: "pointer",
          backgroundColor: isHover ? "#b1b1b1" : "#c4c4c4",
        }}
      ></div>
    </>
  );
};

export default UseIsHoverDemo;
