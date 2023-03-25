import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const C1 = () => {
  const [val, setVal] = useLocalStorage("count", 1);
  return <button onClick={() => setVal(val - 1)}>{val}</button>;
};

const C2 = () => {
  const [val, setVal] = useLocalStorage("count", 5);
  return <button onClick={() => setVal(val + 1)}>{val}</button>;
};

const UseLocalStorageDemo = () => {
  return (
    <div>
      <h3>UseLocalStorage Demo</h3>
      <C1 />
      <C2 />
    </div>
  );
};

export default UseLocalStorageDemo;
