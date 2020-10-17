import React from 'react';
import { Form, Button } from 'react-bootstrap';
import irisqlLogo from '../../public/images/logo-no-bg.svg';

export default function SignUpPage() {
  return (
    <div className="auth-container">
      <Form className="auth-form">
        <Form.Group>
          <img src={irisqlLogo} style={{ width: 200 }} alt="IrisQL logo" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
