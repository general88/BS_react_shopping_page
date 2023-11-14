import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.png";

const Navbar1 = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <img src={logo} className="img-thumbnail" alt="..." />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fs-4 text ">
              <Nav.Link href="#home" className="ps-5">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="ps-5">
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" className="ps-5">
                Pricing
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
