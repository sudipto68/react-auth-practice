import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
              <Link to="/login" className="link">
                Destination
              </Link>
              <Link to="#link" className="link">
                Blog
              </Link>
              <Link to="#link" className="link">
                Contact
              </Link>
              {loggedInUser.name ? (
                <div
                  style={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                >
                  {loggedInUser.name.toUpperCase()}
                </div>
              ) : (
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
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
