import { useSearchParams } from "react-router-dom";

const useSearchParam = (searchParamName, defaultValue) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get(searchParamName) ?? defaultValue;
  const setSearchParam = newValue => {
    const newSearchParams = Object.assign(
      {},
      [...searchParams.entries()].reduce((o, [key, value]) => ({ ...o, [key]: value }), {}),
      { [searchParamName]: newValue }
    );
    setSearchParams(newSearchParams);
  };

  return [searchParam, setSearchParam];
};

export default useSearchParam;
