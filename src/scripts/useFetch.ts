import { useCallback, useEffect, useReducer, useState } from "react";
import { getCollection } from "./fireStore";

export default function useFetch(collectionName: string) {
  // Local state
  const [data, setData] = useState({});
  const [loadSuccess, setLoadSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Methods
  async function fetchData(collectionName: string) {
    try {
      const responseData = await getCollection(collectionName);
      console.log(responseData);
      setData(responseData);
    } catch (e) {
      // @ts-ignore
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(collectionName);
  }, [collectionName]);

  return { data, loadSuccess, error, loading, setData };
}
