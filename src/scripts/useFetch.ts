import { useEffect, useState } from "react";
import { getCollection } from "./firebase/fireStore";
import { getFirestore } from "firebase/firestore/lite";
//project files
import { firebaseInstance } from "./firebase/firebase";

export default function useFetch(collectionName: string) {
  // Local state
  const [data, setData] = useState([]);
  const [loadSuccess, setLoadSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // @ts-ignore
  const database = getFirestore(firebaseInstance);

  // Methods
  async function fetchData(database: any, collectionName: string) {
    try {
      const responseData = await getCollection(collectionName);
      // @ts-ignore
      setData(responseData);
      setLoadSuccess(true);
    } catch (e) {
      // @ts-ignore
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(database, collectionName);
  }, [database]);

  return { data, loadSuccess, error, loading };
}
