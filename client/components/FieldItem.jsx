import React, { Component } from 'react';
import { Form, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

const FieldItem  = (props) => {
  // const fieldName = props.info.fieldName;
  return (
    <Form>
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Field Name"
        size="sm"
        value={props.info.fieldName}
        onChange={(e) => {props.updateFieldName(e.target.value, props.ind)}}
      />
    </Col>
    <Col xs="auto" >
      <Form.Control
        as="select"
        className="mb-2"
        id="inlineFormCustomSelect"
        size="sm"
        value={props.info.fieldType}
        onChange={(e) => {props.updateFieldType(e.target.value, props.ind)}}
        custom
      >
        <option value="String">String</option>
        <option value="Boolean">Boolean</option>
        <option value="Integer">Integer</option>
        <option value="ID">ID</option>
      </Form.Control>
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2 btn-danger" size="sm" onClick={(e) => props.deleteField(props.ind, e)}>
        - 
      </Button>
    </Col>
  </Form.Row>
</Form>
  );
}
 
export default FieldItem;