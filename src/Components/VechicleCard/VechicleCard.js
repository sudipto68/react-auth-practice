import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./VechicleCard.css";

const VechicleCard = (props) => {
  const { name, image } = props.element;
  return (
    <div>
      <Link to="/destination">
        <Card
          className="d-flex justify-content-center align-items-center p-4 card-details"
          style={{ width: "14rem", marginLeft: "40px" }}
        >
          <Card.Img
            variant="top"
            src={image}
            style={{ height: "100px", width: "100px", marginBottom: "20px" }}
          />
          <Card.Title>{name.toUpperCase()}</Card.Title>
        </Card>
      </Link>
    </div>
  );
};

export default VechicleCard;
