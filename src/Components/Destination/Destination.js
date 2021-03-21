import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./Destination.css";

const Destination = () => {
  const { vechicleId } = useParams();
  return (
    <>
      <div>
        <Container className="mt-4 p-4 destination">
          {" "}
          <Card
            style={{
              backgroundColor: "lightgray",
              maxWidth: "450px",
              padding: "20px",
              maxHeight: "300px",
            }}
          >
            <Form>
              <Form.Group>
                <Form.Label>Pick From</Form.Label>
                <Form.Control
                  type="text"
                  className="mail"
                  placeholder="Mirpur 1"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Pick To</Form.Label>
                <Form.Control
                  type="text"
                  className="mail"
                  placeholder="Dhanmondi"
                />
              </Form.Group>
              <Link to={"/search"}>
                <Button className="btn">Search</Button>
              </Link>
            </Form>
          </Card>
          <div>
            <iframe
              title="map"
              width="700"
              height="450"
              className="map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Mirpur%201%20to%20Dhanmondi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Destination;
