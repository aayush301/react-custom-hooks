import React from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

const UseOnlineStatusDemo = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h3>UseOnlineStatus Demo</h3>
      You are {isOnline ? "online" : "offline"}
    </div>
  );
};

export default UseOnlineStatusDemo;
