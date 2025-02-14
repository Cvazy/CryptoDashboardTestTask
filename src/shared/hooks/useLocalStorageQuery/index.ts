import { useEffect, useState } from "react";

export function useLocalStorageQuery<T>(
  key: string,
  fetchQuery: (arg?: void, options?: { skip: boolean }) => { data?: T },
) {
  const [data, setData] = useState<T | null>(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? (JSON.parse(storedData) as T) : null;
  });

  const shouldFetch = !data;
  const { data: fetchedData } = fetchQuery(undefined, { skip: !shouldFetch });

  useEffect(() => {
    if (fetchedData) {
      localStorage.setItem(key, JSON.stringify(fetchedData));
      setData(fetchedData);
    }
  }, [fetchedData, key]);

  return { data };
}
