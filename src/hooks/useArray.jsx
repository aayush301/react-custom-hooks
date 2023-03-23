import { useState } from "react"

const useArray = (initialArr) => {
  const [array, setArray] = useState(initialArr);

  function push(x) {
    setArray(arr => [...arr, x]);
  }

  function filter(callback) {
    setArray(arr => arr.filter(callback));
  }

  function update(index, newElement) {
    setArray(arr => [
      ...arr.slice(0, index),
      newElement,
      ...arr.slice(index + 1, arr.length - 1)
    ]);
  }

  function remove(index) {
    setArray(arr => [
      ...arr.slice(0, index),
      ...arr.slice(index + 1, arr.length - 1)
    ]);
  }

  function clear(index) {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}

export default useArray