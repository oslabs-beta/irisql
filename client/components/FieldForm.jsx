import React, { useState } from 'react';
import { Form, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

function FieldForm (props) {

  const [newField, setNewField] = useState({fieldName:'',fieldType:'String'}); 

  return (
    <Form>
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Field Name"
        size="sm"
        value={newField.fieldName}
        onChange={(e) => setNewField({...newField,fieldName:e.target.value})}
      />
    </Col>
    <Col xs="auto" >
      <Form.Control
        as="select"
        className="mb-2"
        id="inlineFormCustomSelect"
        size="sm"
        value={newField.fieldType}
        onChange={(e) => setNewField({...newField,fieldType:e.target.value})}
        custom
      >
        <option value="String">String</option>
        <option value="Boolean">Boolean</option>
        <option value="Integer">Integer</option>
        <option value="ID">ID</option>
      </Form.Control>
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2" size="sm" onClick={(e) => {
        props.addField(newField, e)
        setNewField({fieldName:'',fieldType:'String'})
        }}>
        +
      </Button>
    </Col>
  </Form.Row>
</Form>
  );
}
 
export default FieldForm;