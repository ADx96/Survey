import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Images/Logo.png";
import Container from "react-bootstrap/Container";
const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
      <h3 style={{ textAlign: "center" }}>React Bootstrap</h3>
    </Navbar>
  );
};

export default NavBar;
