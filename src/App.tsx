// NPM packages
import { useEffect, useState, useCallback } from "react";
import { getFirestore } from "firebase/firestore/lite";
// Project files
import firebaseInstance from "./scripts/firebase";
import {
  getCollection,
  deleteDocument,
  updateDocument,
} from "./scripts/fireStore";
import "./App.css";
import iCategory from "./types/iCategory";
import CategoryItem from "./components/CategoryItem";

function HerbivorousGrill() {
  // Local state
  const [menu, setMenu] = useState(Array<iCategory>());
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  // Properties
  const database = getFirestore(firebaseInstance);

  /*
  firebase.firestore().enablePersistence()
      .then(function() {
        return firebase.auth().signInAnonymously();
      });
}


HerbivorousGrill.prototype.getCleanPath = function(dirtyPath:string) {
    if (dirtyPath.startsWith('/index.html')) {
        return dirtyPath.split('/').slice(1).join('/');
    } else {
        return dirtyPath;
    }
};

HerbivorousGrill.prototype.getFirebaseConfig = function() {
    return firebase.app().options;
};*/

  // Methods
  function onDelete(id: string) {
    deleteDocument(database, "menu", id);
  }

  function onUpdate(id: string, editedCategory: object) {
    updateDocument(database, "menu", id, editedCategory);
  }

  const menuCallback = useCallback(async () => {
    const collection = await getCollection(database, "menu");
    setMenu(collection as unknown as iCategory[]);
    setStatus(1);
  }, [database]);

  useEffect(() => {
    menuCallback();
  }, [menuCallback]);

  // Components
  const CategoryItems = menu.map((item) => (
    <CategoryItem
      key={item.id}
      item={item}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  ));

  HerbivorousGrill.prototype.data = {
    words: [
      "Bar",
      "Fire",
      "Grill",
      "Drive Thru",
      "Place",
      "Best",
      "Spot",
      "Prime",
      "Eatin'",
    ],
    categories: ["Burgers", "Sides", "Salads", "Drinks", "Desserts"],
  };

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <ul>{CategoryItems}</ul>}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
export default HerbivorousGrill;
