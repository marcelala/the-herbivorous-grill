// NPM packages
// @ts-ignore
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getFirestore } from "firebase/firestore/lite";
// Project files
import { useMenu } from "./state/MenuStateProvider";
import { firebaseInstance } from "./scripts/firebase/firebase";
import { deleteDocument, updateDocument } from "./scripts/firebase/fireStore";
import { Browser } from "./components/Browser";

function HerbivorousGrill() {
  // Global state
  // @ts-ignore
  const { status } = useMenu();
  // Properties
  const database = getFirestore(firebaseInstance);
  // Methods
  function onDelete(id: string) {
    deleteDocument(database, "menu", id);
  }

  function onUpdate(id: string, editedCategory: object) {
    updateDocument(database, "menu", id, editedCategory);
  }

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <>{Browser}</>}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
export default HerbivorousGrill;
