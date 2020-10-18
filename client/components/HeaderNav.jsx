import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logoImg from '../../public/images/logo.svg';
import githubLogo from '../../public/images/github.svg';

const HeaderNav = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <HashLink smooth to="/#home">
        <img src={logoImg} style={{ height: 30 }} alt="IrisQL logo" />
      </HashLink>
    </Navbar.Brand>
    <Nav className="d-flex justify-content-around" style={{ width: 200 }}>
      <HashLink smooth to="/#features" style={{ color: 'grey' }}>Features</HashLink>
      <HashLink smooth to="/#demo" style={{ color: 'grey' }}>Demo</HashLink>
      <HashLink smooth to="/#team" style={{ color: 'grey' }}>Team</HashLink>
    </Nav>
    <Nav className="ml-auto">
      <Navbar.Brand href="https://github.com/oslabs-beta/irisql" target="_blank"><img src={githubLogo} style={{ width: 25 }} alt="GitHub logo" /></Navbar.Brand>
    </Nav>
  </Navbar>
);
export default HeaderNav;
