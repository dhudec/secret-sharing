import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import type { UseApi } from '@basis-theory/basis-theory-portal-commons/src/api/client';
import { useApi } from '@basis-theory/basis-theory-portal-commons/src/api/client';

type UseEntity<Data, Error> = [
  Data,
  Dispatch<SetStateAction<Data>>,
  UseApi<Data, Error>
];

/**
 * Combines `useState` and `useApi`.
 * Holds initial `useApi` data in the state.
 * @param params `useApi` params
 * @returns `[state, setState, useApi]`
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStateApi = <Data = any, Error = unknown>(
  ...params: Parameters<typeof useApi>
): UseEntity<Data, Error> => {
  const api = useApi<Data, Error>(...params);
  const [state, setState] = useState<Data>();

  const data = api.data;

  useEffect(() => {
    if (!state) {
      setState(data);
    }
  }, [data, state]);

  return [state, setState, api];
};

export { useStateApi };
