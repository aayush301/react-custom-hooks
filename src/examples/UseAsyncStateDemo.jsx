import React, { useState } from "react";
import useAsyncState from "../hooks/useAsyncState";

const UseAsyncStateDemo = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useAsyncState(0);

  const handleClick1 = () => {
    setX(x + 1);
    console.log(x);
  };

  const handleClick2 = async () => {
    // Method-1
    const newY = await setY(y + 1);
    console.log(newY);

    // Method-2
    // setY(y + 1).then(y => {
    //   console.log(y);
    // });
  };
  console.log("Re-rendered", x, y);

  return (
    <div>
      <h3>UseAsyncState Demo</h3>
      <button onClick={handleClick1}>{x}</button>
      <button onClick={handleClick2}>{y}</button>
    </div>
  );
};

export default UseAsyncStateDemo;
