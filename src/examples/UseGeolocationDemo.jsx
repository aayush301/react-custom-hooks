import React from "react";
import useGeolocation from "../hooks/useGeolocation";

const UseGeolocationDemo = () => {
  const { loading, error, latitude, longitude } = useGeolocation();
  return (
    <div>
      <h3>UseGeolocation Demo</h3>
      {loading && "loading"}
      {error && "error"}
      {latitude} {longitude}
    </div>
  );
};

export default UseGeolocationDemo;
