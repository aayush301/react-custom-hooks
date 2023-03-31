import React, { useState } from "react";
import useLongPressListener from "../hooks/useLongPressListener";

const UseLongPressListenerDemo = () => {
  const [count, setCount] = useState(0);
  const props = useLongPressListener(() => {
    setCount(count + 1);
  });

  return (
    <div>
      <h3>UseLongPressListener Demo</h3>
      <button {...props}>{count}</button>
    </div>
  );
};

export default UseLongPressListenerDemo;
