import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const [active, setActive] = React.useState("home");

  return (
    <Navbar>
      <Container>
        <Nav
          className="justify-content-start"
          activeKey="/"
          onSelect={(selectedKey) => setActive(selectedKey)}
        >
          <Nav.Item>
            <Navbar.Brand href="/">Board Game Library</Navbar.Brand>
          </Nav.Item>
          <Nav.Item>
            <Link to="/addGame"
              eventKey="AddGame"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Add Games Here"
            >
              Add Game
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/gameLibrary"
              eventKey="GetGameLibrary"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Check Out All Your Games"
            >
              Game Library
            </Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Navbar.Text className="justify-content-end">
            Welcome Gamer!
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
