import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../public/images/logo-no-bg-white-horizontal.svg';
import githubLogo from '../../public/images/github.svg';

const HeaderNav = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <Link to="/">
        <img src={logoImg} style={{ height: 30 }} alt="IrisQL logo" />
      </Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>Features</Nav.Link>
      <Nav.Link>Contact</Nav.Link>
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="/signup">Signup</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Navbar.Brand href="https://github.com/oslabs-beta/irisql" target="_blank"><img src={githubLogo} style={{ width: 20 }} alt="GitHub logo" /></Navbar.Brand>
    </Nav>
  </Navbar>
);
export default HeaderNav;
