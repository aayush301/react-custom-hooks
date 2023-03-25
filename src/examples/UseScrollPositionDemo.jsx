import React, { useRef } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

const UseScrollPositionDemo = () => {
  const scrollValue = useScrollPosition();

  const ref = useRef();
  const scroll2 = useScrollPosition(ref);

  return (
    <div>
      <h3>UseScrollPosition Demo</h3>
      <div>Document Scrolled: {scrollValue}</div>
      <div>Next element Scrolled: {scroll2}</div>
      <div
        ref={ref}
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "#ccc",
          overflow: "auto",
          padding: "10px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab repellat saepe, sequi dolores dolor
        fugit est iure aperiam possimus itaque placeat, quibusdam illum. Voluptatum exercitationem odio sit
        vero expedita quibusdam sapiente maiores nisi repellat, ipsam quo fugit beatae eius nemo eligendi
        temporibus, ipsa dolore. Molestias ex nulla esse sunt!
      </div>
    </div>
  );
};

export default UseScrollPositionDemo;
