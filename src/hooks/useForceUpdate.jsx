import { useCallback, useState } from "react";

const useForceUpdate = () => {
  const [, setVal] = useState({});
  return useCallback(() => {
    setVal({});
  }, []);
};

export default useForceUpdate;
