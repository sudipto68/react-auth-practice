import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import firebaseConfig from "../../firebase.config";
import FacebookSignIn from "../FacebookSignIn/FacebookSignIn";

const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false,
    password: "",
  });
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleRegistration = (e) => {
    if (user.name && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
    e.preventDefault();
  };
  const handleBlur = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  return (
    <div>
      <Container className="mt-4 py-4 d-flex justify-content-center">
        <Form onsubmit={handleRegistration}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "500",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Registration
          </h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onBlur={handleBlur}
              className="mail"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              onBlur={handleBlur}
              name="name"
              style={{ maxWidth: "400px" }}
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onBlur={handleBlur}
              className="pass"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button
            type="submit"
            onClick={handleRegistration}
            className="btn mb-2"
          >
            Register
          </Button>
        </Form>
      </Container>
      <div style={{ textAlign: "center" }}>
        <span>Already have an account?</span>
        <Link to="/login">
          <span style={{ color: "orangered" }}> Login here</span>
        </Link>
      </div>
      <GoogleSignIn />
      <FacebookSignIn />
    </div>
  );
};

export default Registration;
