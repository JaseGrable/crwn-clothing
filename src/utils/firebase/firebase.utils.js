import {initializeApp } from 'firebase/app'; 
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {

    apiKey: "AIzaSyAzA797SyUprocZ_TS_AMWucf00xN5iZC0",
  
    authDomain: "crwn-clothing-db-40422.firebaseapp.com",
  
    projectId: "crwn-clothing-db-40422",
  
    storageBucket: "crwn-clothing-db-40422.appspot.com",
  
    messagingSenderId: "376161474455",
  
    appId: "1:376161474455:web:00f743cc2a9f15f982d6d2"
  
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(); 
  provider.setCustomParameters({
    prompt:"select_account"
  });

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);