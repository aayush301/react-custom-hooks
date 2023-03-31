import React from "react";
import usePressedKeys from "../hooks/usePressedKeys";

const UsePressedKeysDemo = () => {
  const pressedKeys = usePressedKeys();

  return (
    <div>
      <h3>UsePressedKeys Demo</h3>
      <div>
        {pressedKeys.length === 0 ? (
          <span>...</span>
        ) : (
          pressedKeys.map((key, idx) => (
            <span key={idx} style={{ marginRight: "2px" }}>
              {key},
            </span>
          ))
        )}
      </div>
    </div>
  );
};

export default UsePressedKeysDemo;
