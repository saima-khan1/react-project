import { useEffect, useState } from 'react';
import ApiService from '../services/api-client';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  signal?: AbortSignal,
  options?: RequestInit,
  queryParams?: Record<string, string | number>,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  //const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      const signalToUse = signal || controller.signal;

      //const requestOptions: RequestInit = options || {};

      //setLoading(true);
      ApiService.get<FetchResponse<T>>(
        endpoint,
        options,
        queryParams,
        signalToUse
      )
        .then((res) => {
          setData(res.data.results);
          //setLoading(false);
        })
        .catch((err) => {
          if (err.name === 'AbortError') return; // Checking for AbortError
          setError(err.message);
          //setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error };
};

export default useData;