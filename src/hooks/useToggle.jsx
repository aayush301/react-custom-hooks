import { useState } from 'react'

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  function toggleValue(value) {
    setValue(currVal => typeof val == "boolean" ? val : !currVal);
  }
  return [value, toggleValue];
}

export default useToggle