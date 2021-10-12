// NPM packages
// @ts-ignore
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getFirestore } from "firebase/firestore/lite";
// Project files
import { useMenu } from "./state/MenuStateProvider";
import { firebaseInstance } from "./scripts/firebase";
import { deleteDocument, updateDocument } from "./scripts/fireStore";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation";
import { Menu } from "./pages/Menu/Menu";

function HerbivorousGrill() {
  // Global state
  // @ts-ignore
  const { status } = useMenu();
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

  // Component
  const Browser = (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Menu} path="/menu" />
      </Switch>
    </BrowserRouter>
  );

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <>{Browser}</>}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
export default HerbivorousGrill;
