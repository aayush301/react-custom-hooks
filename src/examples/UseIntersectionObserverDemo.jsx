import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const C1 = () => {
  const ref = useRef();
  useIntersectionObserver(ref, {
    callback: () => {
      console.log("Element intersected");
    },
  });

  return (
    <>
      <div ref={ref} style={{ width: "100px", height: "100px", backgroundColor: "palegreen" }} />
    </>
  );
};

const C2 = () => {
  const ref = useRef();
  const rootRef = useRef();
  const { isVisible } = useIntersectionObserver(ref, {
    callback: () => {
      console.log("Element 2 intersected");
    },
    rootRef,
  });

  return (
    <>
      <div>Case 2 </div>
      <div>{isVisible ? "Visible" : "Invisible"}</div>
      <div
        ref={rootRef}
        style={{
          marginTop: "20px",
          width: "100px",
          height: "100px",
          backgroundColor: "paleturquoise",
          overflow: "auto",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nesciunt omnis vel eaque recusandae
        <div ref={ref} style={{ width: "20px", height: "20px", backgroundColor: "black" }} />
        ullam magni! Reprehenderit ducimus deleniti quo!
      </div>
    </>
  );
};

const UseIntersectionObserverDemo = () => {
  return (
    <>
      <h3>UseIntersectionObserver Demo</h3>
      <C1 />
      <C2 />
    </>
  );
};

export default UseIntersectionObserverDemo;
