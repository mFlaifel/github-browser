import { useEffect, useState } from 'react';

export const useFetch = (url: string, method = 'GET') => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method,
      headers: {
        Authorization: `token ${process.env.REACT_APP_API_KEY}` || '',
      },
    })
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url, method]);

  return { data, error, loading };
};
