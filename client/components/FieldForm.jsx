import React, { Component } from 'react';
import { Form, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

const FieldForm  = () => {
  return (
    <Form>
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Field Name"
        size="sm"
      />
    </Col>
    <Col xs="auto" >
      <Form.Label htmlFor="inlineFormCustomSelect" srOnly>
        Preference
      </Form.Label>
      <Form.Control
        as="select"
        className="mb-2"
        id="inlineFormCustomSelect"
        size="sm"
        custom
      >
        <option value="0">String</option>
        <option value="1">Boolean</option>
        <option value="2">Integer</option>
        <option value="3">ID</option>
      </Form.Control>
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2" size="sm">
        Add Field
      </Button>
    </Col>
  </Form.Row>
</Form>
  );
}
 
export default FieldForm;