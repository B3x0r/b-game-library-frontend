import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Card style={{ width: "24rem" }}>
        <Card.Img
          variant="top"
          src="./games.jpg"
          className="img-fluid"
          alt="Image of a shelf full of board games"
        />
        <Card.Body>
          <Card.Title>Board Game Library</Card.Title>
          <Card.Text>A new way to check out your own games.</Card.Text>
          <Link to="/gameLibrary" variant="main">
            Pick the Right Game
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
