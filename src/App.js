// eslint-disable-next-line
import react from "react";
import Editor from "./Editor";
import firebase from "firebase/app";
import { Container } from "react-bootstrap";
import "./index.css";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
firebase.initializeApp({
  apiKey: "AIzaSyCTvU2120J85GhHnnxec2AC3Sonip4B7x8",
  authDomain: "thy-chats-app.firebaseapp.com",
  projectId: "thy-chats-app",
  storageBucket: "thy-chats-app.appspot.com",
  messagingSenderId: "473076044601",
  appId: "1:473076044601:web:d0e2d071a38f1fb0f60ee8",
  measurementId: "G-HK0P43B18V",
});

const auth = firebase.auth();
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header></header>

      <section>{user ? <Editor /> : <SignIn />}</section>
    </div>
  );
}
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="container-btn">
      <div className="vertical-container">
        <button className="sing-a-song" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default App;
