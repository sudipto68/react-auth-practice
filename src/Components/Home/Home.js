import React, { useEffect, useState } from "react";
import "./Home.css";
import fakeData from "../../fakedata/fakedata";
import VechicleCard from "../VechicleCard/VechicleCard";
import { Container } from "react-bootstrap";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    setCardData(fakeData);
  }, []);
  return (
    <Container>
      <div className="cardData">
        {cardData.map((element) => (
          <VechicleCard element={element} key={element.id} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
