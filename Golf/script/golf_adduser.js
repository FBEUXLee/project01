window.alert("로그인이 필요합니다.")
// function check(form){
//     if(form.userid.value=="giicha2" && form.userpassword.value=="1234"){
//         window.open('golf_reservation_info.html')
//     }
//     else{
//         alert("Error ID or Password");
//     }
// }

//카카오로 로그인
window.Kakao.init("aac9cb0d232cdfca27ec383f3e64fedc");

function kakaoLogin(){
    window.Kakao.Auth.authorize({
        scope:'profile_nickname, account_email',
        success:function(authObj){
            console.log(authObj);
            window.Kakao.API.request({
                url:'/v2/user/me',
                success : res => {
                    const kakao_account = res.kakao_account
                    console.log(kakao_account);
                }
        });
        }
    });
}

//홈페이지 안에서 회원가입하고 로그인하기(firebase)
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
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
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// const auth = getAuth();
// document.getElementById('signUpButton').addEventListener('click', (event) => {
//     event.preventDefault()
//     const signUpemail = document.getElementById('signUpEmail').value
//     const signUppassword = document.getElementById('signUpPassword').value


//     createUserWithEmailAndPassword(auth, signUpemail, signUppassword)
//         .then((userCredential) => {
//             console.log(userCredential)
//             // Signed in 
//             const user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             console.log('error')
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // ..
//         });
// })

// document.getElementById('signInButton').addEventListener('click', (event) => {
//     event.preventDefault()
//     const signInemail = document.getElementById('signInEmail').value
//     const signInpassword = document.getElementById('signInPassword').value
// signInWithEmailAndPassword(auth, signInemail, signInpassword)
//     .then((userCredential) => {
//         // Signed in 
//         console.log(userCredential)
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         console.log('error')
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });
// });
