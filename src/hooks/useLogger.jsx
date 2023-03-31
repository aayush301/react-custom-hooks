import { useEffect } from "react";

// Credits: https://github.com/kitze/react-hanger/blob/master/src/useLogger.ts
const useLogger = (componentName, props) => {
  useEffect(() => {
    console.log(`${componentName} mounted`);
    return () => {
      console.log(`${componentName} unmounted`);
    };
  }, [componentName]);

  useEffect(() => {
    console.log(`${componentName} props updated `, props);
  });
};

export default useLogger;
