import { useCallback, useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  return useStorage(key, initialValue, window.localStorage);
}

export function useSessionStorage(key, initialValue) {
  return useStorage(key, initialValue, window.sessionStorage);
}

const useStorage = (key, defaultValue, storageObject) => {
  const [value, setValue] = useState(() => {
    const jsonVal = storageObject.getItem(key);
    if (jsonVal != null) return JSON.parse(jsonVal);
    if (typeof defaultValue === "function") return defaultValue();
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => setValue(undefined), []);
  return [value, setValue, remove];
}