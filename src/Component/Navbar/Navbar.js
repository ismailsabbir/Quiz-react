import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import image from "../../../src/images/logo.webp";
import "./Navbar.css";
const Navbars = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="name">
            <img className="logo" src={image} alt="" />
            <h3>Quiz Aplication</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto unorder">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Question</Nav.Link>
              <Nav.Link href="#home">Statistics</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navbars;
