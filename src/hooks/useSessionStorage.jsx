import useStorage from "./useStorage";

const useSessionStorage = (key, initialValue) => {
  return useStorage(key, initialValue, window.sessionStorage);
};

export default useSessionStorage;
