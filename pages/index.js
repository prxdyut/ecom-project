import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT-_Go3O9erTbeJZa9KZLyvAWmoMIlARI",
  authDomain: "ecom-example-5c957.firebaseapp.com",
  projectId: "ecom-example-5c957",
  storageBucket: "ecom-example-5c957.appspot.com",
  messagingSenderId: "229206114254",
  appId: "1:229206114254:web:e26d61e8ab4b75e383f59f",
  measurementId: "G-CR9L4MMPYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
const provider = new GoogleAuthProvider();
const auth = getAuth();
const user = auth.currentUser;

export default function Home() {
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }
  
  const userSignUp = () => {

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorMessage);
  });
  }
  const UserSignOut = () => {
    signOut(auth).then(() => {
      alert('Sign out! Successfull')
    }).catch((error) => {
      alert('Sign out! Unsuccessfull')
    });    
  }

  // createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });


  return (
    <div className={styles.container}>
      <button onClick={userSignUp}>Sign up with GOOGLE</button>
      <button onClick={UserSignOut}>Sign out with GOOGLE</button>
      <hr />

    </div>
  )
}
