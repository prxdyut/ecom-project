import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDT-_Go3O9erTbeJZa9KZLyvAWmoMIlARI",
  authDomain: "ecom-example-5c957.firebaseapp.com",
  projectId: "ecom-example-5c957",
  storageBucket: "ecom-example-5c957.appspot.com",
  messagingSenderId: "229206114254",
  appId: "1:229206114254:web:b33b8cedebbffbe583f59f",
  measurementId: "G-3TW6FY0GK9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);