import React, { useRef } from "react";
import useMousePosition from "../hooks/useMousePosition";

const UseMousePositionDemo = () => {
  const ob = useMousePosition();
  const ref = useRef();
  const ob2 = useMousePosition(ref);
  return (
    <div>
      <h3>useMousePosition Demo</h3>
      <div>
        {Object.entries(ob).map(([key, val]) => (
          <div key={key}>
            {key}: {val}
          </div>
        ))}
      </div>

      <div ref={ref} style={{ width: "250px", height: "250px", backgroundColor: "#aaa" }}>
        {Object.entries(ob2).map(([key, val]) => (
          <div key={key}>
            {key}: {val}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseMousePositionDemo;
