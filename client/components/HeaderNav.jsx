import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../public/images/logo.svg';
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
      <Nav.Link>Demo</Nav.Link>
      <Nav.Link>Team</Nav.Link>
    </Nav>
    <Nav className="ml-auto">
      <Navbar.Brand href="https://github.com/oslabs-beta/irisql" target="_blank"><img src={githubLogo} style={{ width: 25 }} alt="GitHub logo" /></Navbar.Brand>
    </Nav>
  </Navbar>
);
export default HeaderNav;
