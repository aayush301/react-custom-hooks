import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const UseMediaQueryDemo = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <h3>UseMediaQuery example</h3>
      <div>The viewport is {matches ? "more than" : "less than"} 768px wide</div>
    </>
  );
};

export default UseMediaQueryDemo;
