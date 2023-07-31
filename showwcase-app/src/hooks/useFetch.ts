import { useState, useEffect } from 'react';
import { SchoolType } from 'src/utils/types'

export default function useFetch(query: string): { data: SchoolType[] | null; loading: boolean; error: string | null } {
  const [data, setData] = useState<SchoolType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setData(null);
        setError(null);
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/search?name=${query}`);

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        setData(null);
        setError('An error occurred while fetching search results.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
}