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

// Create doc with auto id
export async function createDoc(db: Firestore, path: string, data: object) {
    const collectionReference = collection(db, path);

    await addDoc(collectionReference, data);
}

// Read files
export async function getCollection(db: Firestore, path: string) {
    const collectionReference = collection(db, path);
    const snapshot = await getDocs(collectionReference);
    const list = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });

    return list;
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

// Delete file
export async function deleteDocument(db: Firestore, path: string, id: string) {
    const docReference = doc(db, path, id);

    await deleteDoc(docReference);
}