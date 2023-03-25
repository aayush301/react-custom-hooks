import { useCallback, useEffect, useState } from "react";
import useEventListener from "./useEventListener";

// Credits: https://usehooks-ts.com/react-hook/use-local-storage
const useLocalStorage = (key, initialValue) => {
  const readValueFromLocalStorage = useCallback(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localstorage key "${key}":`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState(readValueFromLocalStorage);

  // Wrapped version of useState's setter fn that persists the new value to local storage
  const setValue = value => {
    if (typeof window === "undefined") {
      console.warn(`Tried setting localstorage key "${key}" even though env is not client`);
    }
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(`Error setting localstorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValueFromLocalStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStorageChange = useCallback(
    e => {
      if (e?.key && e.key !== key) return;
      setStoredValue(readValueFromLocalStorage());
    },
    [key, readValueFromLocalStorage]
  );

  useEventListener("storage", handleStorageChange);

  // custom-event, trigged when some other component possibly fires this event
  useEventListener("local-storage", handleStorageChange);

  return [storedValue, setValue];
};

export default useLocalStorage;
