// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCahl01nUjG3BHgxhnf1vi1BCpBGt9TIaw",
//     authDomain: "easylogin-a714a.firebaseapp.com",
//     projectId: "easylogin-a714a",
//     storageBucket: "easylogin-a714a.appspot.com",
//     messagingSenderId: "562311633998",
//     appId: "1:562311633998:web:cf7c06d70cd7c45608b71f",
//     measurementId: "G-N5V8XRJTGG"
// };

// // Initialize Firebase
// const analytics = getAnalytics(app);
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, browserSessionPersistence, setPersistence, signInWithRedirect, inMemoryPersistence } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, isSignInWithEmailLink, signInWithEmailLink, browserSessionPersistence, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

//회원가입
const auth = getAuth();
document.getElementById('signUpButton').addEventListener('click', (event) => {
    event.preventDefault()
    const signUpemail = document.getElementById('signInEmail').value
    const signUppassword = document.getElementById('signInPassword').value


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

    //로그인 완료
    if (isSignInWithEmailLink(auth, window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation');
        }
        // The client SDK will parse the code from the link for you.
        signInWithEmailLink(auth, email, window.location.href)
            .then((result) => {
                // Clear email from storage.
                window.localStorage.removeItem('emailForSignIn');
                // You can access the new user via result.user
                // Additional user info profile not available via:
                // result.additionalUserInfo.profile == null
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
            })
            .catch((error) => {
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.
            });
    }

    //로그인유지
    setPersistence(firebase.auth.Auth.Persistence.SESSION)//browserSessionPersistence
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
            const errorCode = error.code;
            const errorMessage = error.message;
        });
});


//로그아웃
signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});