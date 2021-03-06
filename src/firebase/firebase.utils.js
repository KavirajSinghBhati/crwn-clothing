import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyD64NznoC_TKNTMu7TxcUBeCrJgj3Prwgw",

  authDomain: "crwn-db-497d7.firebaseapp.com",

  projectId: "crwn-db-497d7",

  storageBucket: "crwn-db-497d7.appspot.com",

  messagingSenderId: "38239237488",

  appId: "1:38239237488:web:4eec089a770fb393dfcbb5",

  measurementId: "G-HQR56N6G3H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
