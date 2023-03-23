import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const UseDocumentTitleDemo = () => {
  const [count, setCount] = useState(1);
  useDocumentTitle(`The value of count is ${count}`);

  return (
    <div>
      <h3>UseDocumentTitle Demo</h3>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default UseDocumentTitleDemo;
