import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

const Registration = () => {
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
            Registration
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
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              style={{ maxWidth: "400px" }}
              placeholder="Enter name"
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
          <span>Already have an account?</span>
          <Link to="/login">
            <span style={{ color: "orangered" }}> Login here</span>
          </Link>
          <br />
        </Form>
      </Container>
      <GoogleSignIn />
    </div>
  );
};

export default Registration;
