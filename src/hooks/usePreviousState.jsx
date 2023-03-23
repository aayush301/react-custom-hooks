import { useRef } from "react"

const usePreviousState = (state) => {
  const currentRef = useRef(state);
  const previousRef = useRef();

  if (currentRef.current !== state) {
    previousRef.current = currentRef.current;
    currentRef.current = state;
  }
  return previousRef.current;
}

export default usePreviousState