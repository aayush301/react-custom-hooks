import React, { useState } from "react";
import useKeyListener from "../hooks/useKeyListener";

const UseKeyListenerDemo = () => {
  const [count, setCount] = useState(0);
  useKeyListener({
    keyFilter: "Enter",
    // keyFilter: ["Enter", "a", "1"],
    // keyFilter: e => e.key === "Enter",
    handler: () => {
      setCount(c => c + 1);
    },
  });

  return (
    <div>
      <h3>useKeyListener Demo</h3>
      <div>{count} count</div>
    </div>
  );
};

export default UseKeyListenerDemo;
