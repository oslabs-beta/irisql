import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import logoImg from '../../public/images/logo-no-bg-white-horizontal.svg';
import githubLogo from '../../public/images/github.svg';
import { Link } from 'react-router-dom';

const HeaderNav = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to='/'>
          <img src={logoImg} style={{ height: 30 }} alt="IrisQL logo"></img>
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>Features</Nav.Link>
        <Nav.Link>Contact</Nav.Link>
      </Nav>
      <Nav className='ml-auto'>
        <Navbar.Brand href="https://github.com/oslabs-beta/irisql" target="_blank"><img src={githubLogo} style={{ width: 20 }} alt="GitHub logo"></img></Navbar.Brand>
      </Nav>
    </Navbar>
  );
}
export default HeaderNav;