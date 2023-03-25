import React, { useRef } from "react";
import useIsVisibleXY from "../hooks/useIsVisibleXY";

const UseIsVisibleXYDemo = () => {
  const ref = useRef(null);
  const isVisible = useIsVisibleXY(ref);
  console.log(isVisible ? "visible" : "not visible");

  return (
    <div>
      <h3>UseIsVisibleXY Demo</h3>
      <div ref={ref} style={{ width: "100px", height: "100px", backgroundColor: "green" }}></div>
    </div>
  );
};

export default UseIsVisibleXYDemo;
