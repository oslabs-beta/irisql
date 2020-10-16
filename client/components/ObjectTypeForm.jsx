import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import FieldForm from './FieldForm';
import FieldItem from './FieldItem';
import { ObjectContext } from './ObjectContextProvider';
import UpdateForm from './UpdateForm';

function ObjectTypeForm() {
  // Gives us access to global state
  const [
    objectListState,
    setObjectList,
    nodeObj,
    setNodeObj,
    viewCode,
    setViewCode
  ] = useContext(ObjectContext);
  // Fields is an array of objects with fieldName and fieldType properties
  const [fields, setFields] = useState([]);
  // objectName keeps track of current object type name in form
  const [objectName, setObjectName] = useState('');
  // Adds new object to global state
  const addObject = e => {
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

  const updateObjectRelation = (inputObjType, index) => {
    let newFields = [...fields];
    newFields[index].relatedObjectName = inputObjType;
    setFields([...newFields]);
  };

  const updateHasRelation = (inputRelation,index) => {
    let newFields = [...fields];
    newFields[index].hasRelation = inputRelation;
    setFields([...newFields]);
  }

  const updateFieldRelation = (inputFieldType, index) => {
    let newFields = [...fields];
    newFields[index].relatedObjectField = inputFieldType;
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
  };

  // Renders a number of field items
  const fieldArray = fields.map((field, index) => (
    <FieldItem
      key={index}
      ind={index}
      info={field}
      updateFieldName={updateFieldName}
      updateFieldType={updateFieldType}
      deleteField={deleteField}
      updateFieldRelation={updateFieldRelation}
      updateObjectRelation={updateObjectRelation}
      updateHasRelation={updateHasRelation}
    />
  ));
  // Check if user recently clicked a node on the graph
  if (!nodeObj.objectName) {
    return (
      <div className='object-form mx-2'>
        <Form>
          <Form.Group>
            <Form.Row className='row justify-content-center'>
              <Form.Label>
                <h4>Create Object</h4>
              </Form.Label>
            </Form.Row>
            <Form.Row className='row justify-content-center'>
              <Form.Control
                className='row justify-content-center'
                size='sm'
                type='text'
                placeholder='Name'
                id='object-name'
                style={{ width: 'auto' }}
                value={objectName}
                onChange={e => setObjectName(e.target.value)}
              />
            </Form.Row>
          </Form.Group>
        </Form>
        {fieldArray}
        <FieldForm addField={addField} />
        <div className='row justify-content-center'>
          <Button size='sm' variant='primary' type='submit' onClick={addObject}>
            Create Object
          </Button>
        </div>
      </div>
    );
  } else {
    return <UpdateForm />;
  }
}

export default ObjectTypeForm;
