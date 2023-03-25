import { useEffect, useState } from "react";

// Credits: https://usehooks-ts.com/react-hook/use-intersection-observer
const useIntersectionObserver = (
  elementRef,
  { callback = () => {}, rootRef = null, rootMargin = "0px", threshold = 0, freezeOnceVisible = false } = {}
) => {
  const [entry, setEntry] = useState({ isVisible: false });
  const frozen = freezeOnceVisible && entry?.isIntersecting;

  const handleIntersect = ([entry]) => {
    setEntry({ isVisible: entry.isIntersecting });
    callback(entry);
  };

  useEffect(() => {
    const element = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || !element || frozen) return;

    const observerParams = { root: rootRef?.current, rootMargin, threshold };
    const observer = new IntersectionObserver(handleIntersect, observerParams);
    observer.observe(element);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, rootRef, rootMargin, JSON.stringify(threshold), frozen]);

  return entry;
};

export default useIntersectionObserver;
