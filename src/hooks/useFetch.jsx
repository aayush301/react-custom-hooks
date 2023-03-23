import { useCallback, useEffect, useState } from "react"

const useFetch = (url) => {

  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const fetchData = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    (async () => {
      try {
        const res = await axios(url, options);
        setResponse(res.data);
      } catch (err) {
        setError(err.response ? err.response.data : "Error");
      }
      setIsLoading(false);
    })();

  }, [isLoading, options, url]);

  return [fetchData, { response, error, isLoading }];
}

export default useFetch