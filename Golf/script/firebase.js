import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCahl01nUjG3BHgxhnf1vi1BCpBGt9TIaw",
    authDomain: "easylogin-a714a.firebaseapp.com",
    projectId: "easylogin-a714a",
    storageBucket: "easylogin-a714a.appspot.com",
    messagingSenderId: "562311633998",
    appId: "1:562311633998:web:cf7c06d70cd7c45608b71f",
    measurementId: "G-N5V8XRJTGG"
};

// Initialize Firebase
const analytics = getAnalytics(app);
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, browserSessionPersistence, setPersistence, signInWithRedirect, inMemoryPersistence } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

//회원가입
const auth = getAuth();
document.getElementById('signUpButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signUpemail = document.getElementById('signUpEmail').value
    const signUppassword = document.getElementById('signUpPassword').value


    createUserWithEmailAndPassword(auth, signUpemail, signUppassword)
        .then((userCredential) => {
            console.log(userCredential)
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            console.log('error')
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
})

//로그인
document.getElementById('signInButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signInemail = document.getElementById('signInEmail').value
    const signInpassword = document.getElementById('signInPassword').value
    signInWithEmailAndPassword(auth, signInemail, signInpassword)
        .then((userCredential) => {
            // Signed in 
            console.log(userCredential)
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            console.log('error')
            const errorCode = error.code;
            const errorMessage = error.message;
        });
});

//로그인유지
setPersistence(auth, browserSessionPersistence)
    .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return signInWithEmailAndPassword(auth, signInemail, signInpassword);
    })
    .catch((error) => {
        // Handle Errors here.
        console.log('error')
        const errorCode = error.code;
        const errorMessage = error.message;
    });

setPersistence(auth, inMemoryPersistence)
    .then(() => {
        const provider = new GoogleAuthProvider();
        // In memory persistence will be applied to the signed in Google user
        // even though the persistence was set to 'none' and a page redirect
        // occurred.
        return signInWithRedirect(auth, provider);
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
    });