// debounce: Run a function at only those times when no change has been observed in the dependency states during a certain time duration.
// Applications of debounce
// - In search query: When user is typing for search and at any time he stops waiting for results, then the query will be taken for search.

import { useEffect } from "react";
import useTimeout from "./useTimeout";

const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
};

export default useDebounce;
