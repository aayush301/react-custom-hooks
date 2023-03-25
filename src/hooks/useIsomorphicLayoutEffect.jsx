import { useEffect, useLayoutEffect } from "react";

// Credits: https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
// In the browser => useLayoutEffect,
// In SSR => useEffect
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
