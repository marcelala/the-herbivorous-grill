import { firebaseAuthInstance } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

//detect state
onAuthStateChanged(firebaseAuthInstance, (user) => {
  if (user != null) {
    console.log("logged in");
  } else {
    console.log("no user");
  }
});
