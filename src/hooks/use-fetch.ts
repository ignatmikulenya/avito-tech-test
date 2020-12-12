import { useState, useCallback } from "react";

import { RequestStatus } from "../enums";

type TUseFetchOutput<TResponse> = [
  () => Promise<void>,
  RequestStatus,
  TResponse | null,
  Error | null
];

export const useFetch = <TResponse>(
  source: () => Promise<Response>,
  initialResponseValue: TResponse | null = null
): TUseFetchOutput<TResponse> => {
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.None);
  const [response, setResponse] = useState<TResponse | null>(
    initialResponseValue
  );
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setStatus(RequestStatus.Loading);

    try {
      const response = await source();
      if (response.ok) {
        const result = await response.json();
        setResponse(result as TResponse);
        setStatus(RequestStatus.Susscess);
      } else {
        setError(new Error(`${response.status}: ${response.statusText}`));
        setStatus(RequestStatus.Error);
      }
    } catch (error) {
      setError(error);
      setStatus(RequestStatus.Error);
    }
  }, [source]);

  return [execute, status, response, error];
};
