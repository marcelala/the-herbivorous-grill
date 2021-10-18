// NPM packages
import {
  Firestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  DocumentData,
} from "firebase/firestore/lite";
import { collectionGroup, query, where } from "firebase/firestore";
//project files
import { fireStoreInstance } from "./firebase";

// Create doc with auto id
export async function createDoc(path: string, data: object) {
  const collectionReference = collection(fireStoreInstance, path);
  const documentReference = await addDoc(collectionReference, data);
  return documentReference.id;
}
// Update file
export async function updateDocument(
  db: Firestore,
  path: string,
  id: string,
  data: object
) {
  const docReference = doc(db, path, id);

  await updateDoc(docReference, data as DocumentData);
}

// Read files
export async function getCollection(path: string) {
  const collectionReference = collection(fireStoreInstance, path);
  const snapshot = await getDocs(collectionReference);
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return list;
}

export async function getSubCollection(path: string) {
  const subCollection = query(
    collectionGroup(fireStoreInstance, path),
    where("product_price", ">", "0")
  );
  const snapshot = await getDocs(subCollection);
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return list;
}

// Delete file
export async function deleteDocument(db: Firestore, path: string, id: string) {
  const docReference = doc(db, path, id);

  await deleteDoc(docReference);
}
