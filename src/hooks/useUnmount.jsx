import { useEffect } from "react";

const useUnmount = handler => {
  useEffect(() => {
    return handler;
  }, []);
};

export default useUnmount;
