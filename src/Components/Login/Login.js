import React from "react";
import "./Login.css";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

const Login = () => {
  return (
    <div>
      <Container className="mt-4 py-4 d-flex justify-content-center">
        <Form>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "500",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Login
          </h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              className="mail"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="pass"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button type="submit" className="btn mb-4">
            Login
          </Button>
          <br />
          <span>Don't have an account?</span>
          <Link to="/registration">
            <span style={{ color: "orangered" }}> Create a new account</span>
          </Link>
          <br />
        </Form>
      </Container>
      <GoogleSignIn />
    </div>
  );
};

export default Login;
