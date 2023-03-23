import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const UseWindowDimensionsDemo = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div>
      <h3>use window dimensions example</h3>

      <div
        style={{
          width: 100,
          height: 100,
          ...(width < 600 ? { backgroundColor: "yellow" } : { backgroundColor: "blue" }),
        }}
      ></div>
    </div>
  );
};

export default UseWindowDimensionsDemo;
