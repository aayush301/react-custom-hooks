import { useEffect } from "react";

// Inverse of useUpdateEffect()
const useEffectOnce = effect => {
  useEffect(effect, []);
};

export default useEffectOnce;
