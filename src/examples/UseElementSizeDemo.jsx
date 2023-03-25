import React from "react";
import useElementSize from "../hooks/useElementSize";

const UseElementSizeDemo = () => {
  const [ref, { width, height }] = useElementSize();
  return (
    <div>
      <h3>useElementSize Demo</h3>
      <div ref={ref} style={{ backgroundColor: "#ddd", padding: "10px" }}>
        Width {width} height {height}
      </div>
    </div>
  );
};

export default UseElementSizeDemo;
