import React from 'react';
import { Col, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavbarStyle } from './styled';

export default function MyNavBar({ bg, expand, variant, ...props }) {
  return (
    <NavbarStyle>
      <Navbar bg={bg} expand={expand} variant={variant} fixed="top" {...props}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="/" className="col-md-2">
            <Col xs={12} sm={12} md={12}>
              <Image className="col-md-12" src={'../images/SPACE_BOX_JPEG_WHITE_BG.jpg'} />
            </Col>
          </Navbar.Brand>
          <Nav className="ml-auto mr-auto ">
            <Nav.Link className="nav-mouse" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-mouse" href="/about">
              About Us
            </Nav.Link>
            <Nav.Link className="nav-mouse" href="/product">
              Product
            </Nav.Link>
            <NavDropdown className="nav-mouse" title="Project" id="basic-nav-dropdown">
              <NavDropdown.Item href="/project/1">Project1</NavDropdown.Item>
              <NavDropdown.Item href="/project/2">Project2</NavDropdown.Item>
              <NavDropdown.Item href="/project/3">Project3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="nav-mouse" title="Inspiration" id="basic-nav-dropdown">
              <NavDropdown.Item href="/blog/idea">Project1</NavDropdown.Item>
              <NavDropdown.Item href="/blog/">Project2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-mouse" href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="/" className="col-md-2 nav-mouse text-center">
            <Col xs={12} sm={12} md={12} className="text-center">
              {/* <Image className="col-md-12" src={'images/SPACE_BOX_JPEG_WHITE_BG.jpg'} /> */}
              Visitor
            </Col>
            <span style={{ fontSize: '16px' }}>super Admin</span>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </NavbarStyle>
  );
}
