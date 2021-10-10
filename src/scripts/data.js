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
import HerbivorousGrill from "../App";
import firebase from "firebase/compat";


HerbivorousGrill.prototype.addCategory = function (data) {
    const collection = firebase.firestore().collection('categories');
    return collection.add(data);
};

HerbivorousGrill.prototype.getAllCategories = function (render) {
    let query = firebase.firestore()
        .collection('categories')
        .limit(50);
    this.getDocumentsInQuery(query, render);
};

HerbivorousGrill.prototype.getCategory = function (id) {
    return firebase.firestore().collection('categories').doc(id).get();
};

HerbivorousGrill.prototype.getDocumentsInQuery = function(query, renderer) {
    query.onSnapshot(function(snapshot) {
        if (!snapshot.size) return renderer.empty(); // Display "There are no categories".

        snapshot.docChanges().forEach(function(change) {
            if (change.type === 'removed') {
                renderer.remove(change.doc);
            } else {
                renderer.display(change.doc);
            }
        });
    });
};

HerbivorousGrill.prototype.addProduct = function (categoryId, product) {
    const collection = firebase.firestore().collection('categories');
    const document = collection.doc(categoryId);
    const newProductDocument = document.collection('products').doc();
    return firebase.firestore().runTransaction((transaction) => {
        return transaction.get(document).then((doc) => {
            const data = doc.data();
            transaction.update(document, {
                numberOfProducts: data.numberOfProducts + 1,
            });
            return transaction.set(newProductDocument, product);
        });
    });
};