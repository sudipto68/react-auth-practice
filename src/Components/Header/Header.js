import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand className="brand-name">Easy Ride</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/home" className="link">
                Home
              </Link>
              <Link to="#link" className="link">
                Destination
              </Link>
              <Link to="#link" className="link">
                Blog
              </Link>
              <Link to="#link" className="link">
                Contact
              </Link>
              <Link to="/login">
                <Button
                  style={{
                    backgroundColor: "orangered",
                    border: "none",
                    width: "80px",
                    height: "40px",
                    marginLeft: "20px",
                  }}
                >
                  Login
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
