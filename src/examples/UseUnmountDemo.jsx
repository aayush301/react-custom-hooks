import React, { useState } from "react";
import useUnmount from "../hooks/useUnmount";

const C1 = () => {
  const [value, setValue] = useState(0);
  useUnmount(() => {
    console.log("Going to unmount");
  });

  return (
    <div>
      <button onClick={() => setValue(val => val + 1)}>{value}</button>
    </div>
  );
};

const UseUnmountDemo = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h3>UseUnmount Demo</h3>
      <button onClick={() => setShow(show => !show)}>Toggle child component</button>
      {show && <C1 />}
    </div>
  );
};

export default UseUnmountDemo;
