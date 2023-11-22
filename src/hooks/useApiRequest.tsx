import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

type FetchOptions = {
  method: string;
  url: string;
  data: any;
};

type ApiRequestResponse = {
  data: any;
  loading: boolean;
  error: null | AxiosError;
};

/**
 * Makes an API request.
 * @param options - The fetch options for the request.
 * @returns The API request response.
 */
const useApiRequest = (options: FetchOptions): ApiRequestResponse => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | AxiosError>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response: AxiosResponse = await axios({
          method: options.method,
          url: options.url,
          data: options.data,
        });
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      } catch (error: any) {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [options.method, options.url, options.data]);

  return { data, loading, error };
};

export default useApiRequest;
