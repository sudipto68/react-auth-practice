import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

const FacebookSignIn = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleFacebookSignIn = () => {
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;
        console.log(accessToken);
        const { displayName, email } = user;
        const signedInuser = { name: displayName, email };
        setLoggedInUser(signedInuser);
        history.replace(from);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);

        // ...
      });
  };
  return (
    <div>
      <button
        onClick={handleFacebookSignIn}
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
        Continue with Facebook
      </button>
    </div>
  );
};

export default FacebookSignIn;
