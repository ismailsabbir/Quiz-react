import React from "react";
// import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import image from "../../../src/images/logo.webp";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Navbar.css";
const Navbars = () => {
  return (
    <div className="nav">
      <Navbar bg="light" expand="lg" fixed="top" className="navcomponent">
        <Container className="containers">
          <Navbar.Brand href="#home" className="name">
            <img className="logo" src={image} alt="" />
            <h3>Quiz Aplication</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto unorder">
              {/* <NavLink to="/home">Home</NavLink> */}
              <Link className="navitem" to="/home">
                Home
              </Link>
              <Link className="navitem" to="/question">
                Question
              </Link>
              <Link className="navitem" to="/statistic">
                Statistic
              </Link>
              <Link className="navitem" to="/blog">
                Blog
              </Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="search-btn " variant="outline-success">
                  Search
                </Button>
              </Form>

              {/* <Nav.Link href="home">Home</Nav.Link> */}
              {/* <Nav.Link href="question">Question</Nav.Link> */}
              {/* <Nav.Link href="statistics">Statistics</Nav.Link> */}
              {/* <Nav.Link href="blog">Blog</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navbars;
