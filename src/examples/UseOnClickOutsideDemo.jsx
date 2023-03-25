import React, { useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

const UseOnClickOutsideDemo = () => {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    console.log("Clicked outside");
  });

  return (
    <div>
      <h3>UseOnClickOutside Demo</h3>
      <div ref={ref} style={{ width: 50, height: 50, backgroundColor: "cyan" }} />
    </div>
  );
};

export default UseOnClickOutsideDemo;
