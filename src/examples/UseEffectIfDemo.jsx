import React, { useState } from "react";
import useEffectIf from "../hooks/useEffectIf";

const UseEffectIfDemo = () => {
  const [count, setCount] = useState(0);
  useEffectIf(
    count % 2 === 0,
    () => {
      console.log("Even");
    },
    [count]
  );

  return (
    <div>
      <h3>UseEffectIf Demo</h3>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
    </div>
  );
};

export default UseEffectIfDemo;
