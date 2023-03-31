import useEffectOnce from "./useEffectOnce";

// Same as useEffectOnce
const useMount = handler => {
  useEffectOnce(() => {
    handler();
  });
};

export default useMount;
