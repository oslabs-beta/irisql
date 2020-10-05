import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import FieldForm from './FieldForm';
import FieldItem from './FieldItem';
import { ObjectContext } from './ObjectContextProvider';

function ObjectTypeForm() {
  // Gives us access to global state
  const [objectListState, setObjectList, nodeObj, setNodeObj] = useContext(ObjectContext);
  console.log('node object:', nodeObj);
  // Fields is an array of objects with fieldName and fieldType properties
  const [fields, setFields] = useState([]);
  // objectName keeps track of current object type name in form
  const [objectName, setObjectName] = useState('');
  // if (nodeObj.objectName) {
  //   setFields(nodeObj.fields)
  // }
  // Adds new object to global state
  const addObject = (e) => {
    e.preventDefault();
    // Get object name from local state
    // Push new object to object list
    const newObjectList = [...objectListState.objects, { objectName, fields }];
    // Add new object list to the objects property of our object list global state
    const stateObject = { objects: newObjectList };
    setObjectList(stateObject);
    // Clear out local state fields
    setFields([]);
    // clear out objectType input 
    setObjectName('');
    document.getElementById('object-name').value = '';
  };
  // Updates currently clicked Node
  const updateObject = (e) => {
    console.log("updating object");
    
  }
  // Allows users to update current fieldName or type
  const updateFieldName = (inputValue, index) => {
    let newFields = [...fields];
    newFields[index].fieldName = inputValue;
    setFields([...newFields]);
  };
  const updateFieldType = (inputType, index) => {
    let newFields = [...fields];
    newFields[index].fieldType = inputType;
    setFields([...newFields]);
  };
  
  // Allows users to add new field
  const addField = (fieldItemInput, e) => {
    setFields([...fields, fieldItemInput]);
    e.preventDefault();
    //e.target.value = '';
  };

  const initInputValue = () => {
    let objectTypeValue = nodeObj.objectName ? nodeObj.objectName : 'Name';
    setObjectName(objectTypeValue);
  }
  
  // Renders a number of field items
  const fieldArray = fields.map((field, index) => (
    <FieldItem
      key={index}
      ind={index}
      info={field}
      updateFieldName={updateFieldName}
      updateFieldType={updateFieldType}
    />
  ));

  return (
    <div className='object-form'>
      <Form>
        <Form.Group>
          <Form.Row className='row justify-content-center'>
            <Form.Label>Create Object</Form.Label>
          </Form.Row>
          <Form.Row>
            <Col xs='auto'>
              <Form.Control
                size='sm'
                type='text'
                placeholder='Name'
                id='object-name'
                style={{ width: 'auto' }}
                value={objectName}
                // onChange={(e) => setObjectName(e.target.value)}
                onChange={initInputValue}
              />
            </Col>
            <Col xs='auto'>
              <Button
                size='sm'
                variant='primary'
                type='submit'
                onClick={nodeObj.objectName ? updateObject : addObject }>
                {nodeObj.objectName ? 'Update Object': 'Create Object'}
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
