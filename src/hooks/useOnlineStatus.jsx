import { useEffect, useState } from "react";

// Credits: https://github.com/rehooks/online-status/blob/master/src/index.js
const getOnlineStatus = () => {
  return typeof navigator !== "undefined" && typeof navigator.onLine === "boolean" ? navigator.onLine : false;
};

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(getOnlineStatus());
  const goOnline = () => setIsOnline(true);
  const goOffline = () => setIsOnline(false);

  useEffect(() => {
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);
  return isOnline;
};

export default useOnlineStatus;
