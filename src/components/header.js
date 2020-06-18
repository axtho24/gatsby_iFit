import React from "react"
import { Navbar, Nav, Image, Button } from 'react-bootstrap'

import logoImage from "../images/14-layers.png"

const Header = () => (
  <header>
    <Navbar expand="md">
      <Navbar.Brand href="/"><Image src={logoImage} alt="company logo" fluid/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav as="ul" className="navMenu m-auto">
          <Nav.Link as="li">EXERCISE</Nav.Link>
          <Nav.Link as="li">NUTRITION</Nav.Link>
          <Nav.Link as="li">ACTIVITY</Nav.Link>
          <Nav.Link as="li">ACTIVITY</Nav.Link>
        </Nav>
      <Button>SIGN UP</Button>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
