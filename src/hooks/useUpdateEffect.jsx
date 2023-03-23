// Similar to useEffect, but doesn't call the function on first render.
import { useEffect, useRef } from 'react'

const useUpdateEffect = (callback, dependencies) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}

export default useUpdateEffect