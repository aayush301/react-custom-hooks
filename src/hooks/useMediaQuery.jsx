import { useCallback, useEffect, useState } from "react";

// Credits: https://usehooks-ts.com/react-hook/use-media-query
const isMatch = queryString => {
  if (typeof window !== "undefined") return window.matchMedia(queryString).matches;
  return false;
};

const useMediaQuery = queryString => {
  const [matches, setMatches] = useState(isMatch(queryString));
  const onMatchedMediaChange = useCallback(() => setMatches(isMatch(queryString)), [queryString]);

  useEffect(() => {
    const matchMedia = window.matchMedia(queryString);
    matchMedia.addEventListener("change", onMatchedMediaChange);
    return () => {
      window.removeEventListener("change", onMatchedMediaChange);
    };
  }, [queryString, onMatchedMediaChange]);

  return matches;
};

export default useMediaQuery;
