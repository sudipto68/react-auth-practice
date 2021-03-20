import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

const GoogleSignIn = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // var credential = result.credential;
        // var token = credential.accessToken;
        const { displayName, email } = result.user;
        const signedInuser = { name: displayName, email };
        setLoggedInUser(signedInuser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        style={{
          border: "none",
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: "bold",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
