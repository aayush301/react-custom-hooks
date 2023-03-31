import React, { useRef } from "react";
import useIsTyping from "../hooks/useIsTyping";

const UseIsTypingDemo = () => {
  const ref = useRef();
  const isTyping = useIsTyping({ elementRef: ref });

  return (
    <div>
      <h3>UseIsTyping Demo</h3>
      <input type="text" ref={ref} />
      <span> {isTyping ? "typing" : "Not typing"}</span>
    </div>
  );
};

export default UseIsTypingDemo;
