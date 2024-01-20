import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTzJ20qp0Ko-IDM-rM1Kpz-dA4lrlE7eg",
  authDomain: "auth-login-912d8.firebaseapp.com",
  databaseURL:
    "https://auth-login-912d8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-login-912d8",
  storageBucket: "auth-login-912d8.appspot.com",
  messagingSenderId: "280689211271",
  appId: "1:280689211271:web:20d0c35a220775b2680522",
  measurementId: "G-XKC4Y8MCWN",
};

const app = initializeApp(firebaseConfig);

const card = document.querySelector(".card h1");
const name = document.getElementById("Uname");
const form = document.querySelector("form");

const googleSignBtn = document.getElementById("google");
const githubSignBtn = document.getElementById("github");

googleSignBtn.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      card.classList.remove("hidden");
      form.classList.add("hidden");
      name.innerHTML = user.displayName;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});
githubSignBtn.addEventListener("click", () => {
  const provider = new GithubAuthProvider();
  const auth = getAuth(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      card.classList.remove("hidden");
      form.classList.add("hidden");
      name.innerHTML = user.displayName;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      card.classList.remove("hidden");
      form.classList.add("hidden");
      name.innerHTML = user.email;
      console.log("Signed In");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
});
