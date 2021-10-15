// NPM packages
// @ts-ignore
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getFirestore } from "firebase/firestore/";
// Project files
import { useMenu } from "./state/MenuStateProvider";
import {
  deleteDocument,
  getCollection,
  updateDocument,
} from "./scripts/firebase/fireStore";
import { Browser } from "./components/Browser";
import { useCallback, useEffect, useState } from "react";

function HerbivorousGrill() {
  // Global state
  // @ts-ignore
  const { menuDispatch, menu } = useMenu();
  // Properties
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const path = "menu";

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const menuCollection = await getCollection(path);
      menuDispatch({ type: "SET_MENU", payload: menuCollection });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  // @ts-ignore
  useEffect(() => fetchData(path), [fetchData]);
  /*
  // Methods
  function onDelete(id: string) {
    deleteDocument(database, "menu", id);
  }

  function onUpdate(id: string, editedCategory: object) {
    updateDocument(database, "menu", id, editedCategory);
  }
*/
  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <>{Browser}</>}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
export default HerbivorousGrill;
