import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAZk8mCj6Z5Y1jVPEQyMihfmxfD5IEg6wM",
  authDomain: "psyapp-c8539.firebaseapp.com",
  projectId: "psyapp-c8539",
  storageBucket: "psyapp-c8539.appspot.com",
  messagingSenderId: "372952993504",
  appId: "1:372952993504:web:5f693f60be123e09120a85",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)