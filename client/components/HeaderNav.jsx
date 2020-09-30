import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import logoImg from '../../public/images/logo-no-bg-white-horizontal.svg';
import githubLogo from '../../public/images/github.svg';
import { Link } from 'react-router-dom';

const HeaderNav = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img src={logoImg} style={{height:30}}alt="IrisQL logo"></img></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#features"><Link to='/prototyper'>Features</Link></Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Nav className='ml-auto'>
      <Navbar.Brand href="https://github.com/oslabs-beta/irisql" target="_blank"><img src={githubLogo} style={{width:20}}alt="GitHub logo"></img></Navbar.Brand>
    </Nav>
  </Navbar>
  );
}
export default HeaderNav;