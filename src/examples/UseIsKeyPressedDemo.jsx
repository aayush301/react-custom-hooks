import React from "react";
import useIskeyPressed from "../hooks/useIskeyPressed";

const UseIsKeyPressedDemo = () => {
  const isQPressed = useIskeyPressed("q");
  return (
    <div>
      <h3>UseIsKeyPressed Demo</h3>
      <div>Q key {isQPressed ? "pressed" : "not pressed"}</div>
    </div>
  );
};

export default UseIsKeyPressedDemo;
