import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import FieldForm from './FieldForm';
import FieldItem from './FieldItem';
import { ObjectContext } from './ObjectContextProvider';

function UpdateForm() {
  // Gives us access to global state
  const [objectListState, setObjectList, nodeObj, setNodeObj] = useContext(ObjectContext);
  // Fields is an array of objects with fieldName and fieldType properties
  const [fields, setFields] = useState(nodeObj.fields);
  // objectName keeps track of current object type name in form
  const [objectName, setObjectName] = useState(nodeObj.objectName);

  // useEffect(() => {
  //   useState(nodeObj.fields);
  //   useState(nodeObj.objectName);
  // }, [nodeObj]);

  // Update object in global state
  const updateObject = (e) => {
    // Prevent the page from reloading
    e.preventDefault();
    // Initialize empty array to hold copy of state
    let updatedListState = {};
    updatedListState.objects = objectListState.objects.map(obj => {
      // If we reach the object we edited create new object with local state and push that to the array
      if (obj.objectName === nodeObj.objectName) {
        obj.objectName = objectName;
        obj.fields = fields;
        return obj;
      } 
      // Else, push to the array
      return obj;
    });
    console.log('updated list state:', updatedListState);
    // Set global object list state to edited version
    setObjectList(updatedListState);
    // Clear out local state fields
    setFields([]);
    // clear out objectType input 
    setObjectName('');
    // Reset current node object to change form back to objectTypeForm
    setNodeObj({});
  };
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

  // Allows users to delete fields
  const deleteField = (fieldIndex, e) => {
    e.preventDefault();
    const newFields = fields.filter((field, index) => index !== fieldIndex);
    setFields([...newFields]);
  }
  
  // Renders a number of field items
  const fieldArray = fields.map((field, index) => (
    <FieldItem
      key={index}
      ind={index}
      info={field}
      updateFieldName={updateFieldName}
      updateFieldType={updateFieldType}
      deleteField={deleteField}
    />
  ));

  return (
    <div className='object-form row justify-content-center'>
      <Form>
        <Form.Group>
          <Form.Row className='row justify-content-center'>
            <Form.Label>Update Object</Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Name'
              id='object-name'
              style={{ width: 'auto' }}
              value={objectName}
              onChange={(e) => setObjectName(e.target.value)}
            />
          </Form.Row>
        </Form.Group>
      </Form>
      {fieldArray}
      <FieldForm addField={addField} />
      <Form.Row>
        <Button
          size='sm'
          variant='primary'
          type='submit'
          onClick={updateObject}
        >
          Update Object
        </Button>
        <Button
          size='sm'
          variant='secondary'
          type='submit'
          onClick={() => setNodeObj({})}
          className='ml-2'
        >
          Cancel
        </Button>
      </Form.Row>
    </div>
  );
  
}

export default UpdateForm;
