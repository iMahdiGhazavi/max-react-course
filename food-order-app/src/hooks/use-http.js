import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.header ? requestConfig.header : {},
      body: JSON.stringify(requestConfig.body)
        ? JSON.stringify(requestConfig.body)
        : null,
    });

    if (!response.ok) {
      throw new Error("Request failed!");
    }
    const responseData = await response.json();

    applyData(responseData);
  }, []);

  return { isLoading, setIsLoading, error, setError, sendRequest };
};

export default useHttp;
