import { useState } from "react";

const useAsyncState = initialValue => {
  const [state, setState] = useState(initialValue);
  const asyncSetState = value =>
    new Promise(resolve => {
      setState(value);
      setState(curr => {
        resolve(curr);
        return curr;
      });
    });

  return [state, asyncSetState];
};

export default useAsyncState;
