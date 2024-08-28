import React from "react";
import Logo from "../Assets/Nav/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FancyNav = () => {
  const states = [
    { id: 1, name: "Goa" },
    { id: 2, name: "Bihar" },
    { id: 3, name: "Delhi" },
    { id: 4, name: "Kerala" },
    { id: 5, name: "Assam" },
    { id: 6, name: "Sikkim" },
    { id: 7, name: "Odisha" },
    { id: 8, name: "Punjab" },
    { id: 9, name: "Haryana" },
    { id: 10, name: "Tripura" },
    { id: 11, name: "Gujarat" },
    { id: 12, name: "Manipur" },
    { id: 13, name: "Mizoram" },
    { id: 14, name: "Nagaland" },
    { id: 15, name: "Karnataka" },
    { id: 16, name: "Rajasthan" },
    { id: 17, name: "Jharkhand" },
    { id: 18, name: "Meghalaya" },
    { id: 19, name: "Telangana" },
    { id: 20, name: "Tamil Nadu" },
    { id: 21, name: "West Bengal" },
    { id: 22, name: "Uttarakhand" },
    { id: 23, name: "Maharashtra" },
    { id: 24, name: "Chhattisgarh" },
    { id: 25, name: "Uttar Pradesh" },
    { id: 26, name: "Andhra Pradesh" },
    { id: 27, name: "Madhya Pradesh" },
    { id: 28, name: "Jammu & Kashmir" },
    { id: 29, name: "Himachal Pradesh" },
    { id: 30, name: "Arunachal Pradesh" },
  ];
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="200"
            //   height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            <NavDropdown title="States" id="collapsible-nav-dropdown">
              {states.map((state) => {
                return (
                  <NavDropdown.Item href="#action/3.3" key={state.id}>
                    {state.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link href="#deets">Login/Signup</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Wishlist
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              My Bookings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FancyNav;
