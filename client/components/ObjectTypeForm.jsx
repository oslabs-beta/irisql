import React, { useState, useContext } from 'react';
import { Form, Button, Col} from 'react-bootstrap'
import FieldForm from './FieldForm'
import FieldItem from './FieldItem';
import {ObjectContext} from './ObjectContextProvider';


function ObjectTypeForm () {
  // Gives us access to global state
  const [objectListState, setObjectList] = useContext(ObjectContext);
  const addObject = (e) => {
    e.preventDefault();
    // Get object name from input field
    const objectName = document.getElementById('object-name').value;
    // Push new object to object list
    const newObjectList = [...objectListState.objects, {objectName, fields}];
    // Add new object list to the objects property of our object list global state
    const stateObject = {objects: newObjectList};
    setObjectList(stateObject);
  }
  // Fields is an array of objects with fieldName and fieldType properties
  const [fields, setFields] = useState([]);
  // Allows users to update current fieldName or type
  const updateFieldName = (inputValue, index) => {
    let newFields = [...fields];
    newFields[index].fieldName = inputValue;
    setFields([...newFields]);
  }
  const updateFieldType = (inputType, index) => {
    let newFields = [...fields];
    newFields[index].fieldType = inputType;
    setFields([...newFields]);
  }
  // Renders a number of field items
  const fieldArray = fields.map((field, index) => 
  <FieldItem 
    key={index}
    ind={index} 
    info={field} 
    updateFieldName={updateFieldName} 
    updateFieldType={updateFieldType} 
  />);

  // Allows users to add new field
  const addField = (fieldItemInput, e) => {
    setFields([...fields, fieldItemInput])
    e.preventDefault();
    //e.target.value = '';
  }


  return (
    <div className="object-form">
      <Form>
        <Form.Group controlId="ObjectInfo">
          <Form.Row className="row justify-content-center">
            <Form.Label>Create Object</Form.Label>
          </Form.Row>
          <Form.Row>
            <Col xs="auto">
              <Form.Control size="sm" type="text" placeholder="Name" id="object-name" style={{ width: "auto" }} />
            </Col>
            <Col xs="auto">
              <Button size="sm" variant="primary" type="submit" onClick={addObject}>
                Create Object
            </Button>
            </Col>
          </Form.Row>
        </Form.Group>
        {fieldArray}
        <FieldForm addField={addField} />
      </Form>
    </div>
  );
}
 
export default ObjectTypeForm;