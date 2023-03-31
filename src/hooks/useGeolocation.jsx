import { useEffect, useState } from "react";

const useGeolocation = (options = {}) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now(),
  });

  const onSuccess = e => {
    const { accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed } = e.coords;
    const timestamp = e.timestamp;
    setState({
      loading: false,
      accuracy,
      altitude,
      altitudeAccuracy,
      heading,
      latitude,
      longitude,
      speed,
      timestamp,
    });
  };

  const onError = error => {
    setState(oldState => ({ ...oldState, loading: false, error }));
  };

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    let watchid = navigator.geolocation.watchPosition(onSuccess, onError, options);

    return () => {
      navigator.geolocation.clearWatch(watchid);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return state;
};

export default useGeolocation;
