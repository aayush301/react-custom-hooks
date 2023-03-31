import React, { useEffect } from "react";
import useForceUpdate from "../hooks/useForceUpdate";

let renderCount = 1;
const UseForceUpdateDemo = () => {
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    renderCount++;
  });

  return (
    <div>
      <h3>UseForceUpdate Demo</h3>
      {renderCount} renders
      <button onClick={forceUpdate}>Re-render</button>
    </div>
  );
};

export default UseForceUpdateDemo;
