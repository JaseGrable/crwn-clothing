import {initializeApp } from 'firebase/app'; 
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFireStore, doc, getDoc, setDoc} from 'firebase/firestore'
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


export const db = getFireStore(); 

export const createUserDocumentFromAuth = async (userAuth) => {
    const  userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email } = userAuth; 
        const CreatedAt = new Date(); 

        try {
            await setDoc (userDocRef, {
                displayName, 
                email,
                CreatedAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef; 
}