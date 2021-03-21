import React from "react";
import { Card, Container } from "react-bootstrap";
import "./SearchResult.css";

const SearchResult = () => {
  return (
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
          <Card className="card1">
            <h5>Miprur 1</h5>
            <p>to</p>
            <h5>Dhanmondi</h5>
          </Card>
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
  );
};

export default SearchResult;
