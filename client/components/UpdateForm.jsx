/* eslint-disable no-use-before-define */
import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import FieldForm from './FieldForm';
import FieldItem from './FieldItem';
import { ObjectContext } from './ObjectContextProvider';

function UpdateForm() {
  // Gives us access to global state
  const [objectListState, setObjectList, nodeObj, setNodeObj] = useContext(ObjectContext);
  // Fields is an array of objects with fieldName and fieldType properties
  // const [fields, setFields] = useState(nodeObj.fields);
  // // objectName keeps track of current object type name in form
  // const [objectName, setObjectName] = useState(nodeObj.objectName);
  // usedDuplicateFields notifies user if they tried to use an existing field or objectName
  const [usedDuplicateFields, setUsedDuplicateFields] = useState(false);
  // State that keeps track of new field in fieldForm
  const defaultField = {
    fieldName: '',
    fieldType: 'GraphQLString',
    hasRelation: false,
    relatedObjectName: null,
    relatedObjectField: null,
    relatedReferenceType: null,
  };
  const [newField, setNewField] = useState(defaultField);

  // Update object in global state
  const updateObject = (e) => {
    // Prevent automatic page reload
    e.preventDefault();
    // Check if duplicate object name was used
    setUsedDuplicateFields(false);
    // Iterate through all fields and objects to ensure duplicate objectName isnt added
    const duplicateObject = checkDuplicates(nodeObj.objectName);
    // If the object is a duplicate, prevent global state from being updated
    if (duplicateObject) {
      setUsedDuplicateFields(true);
      return;
    }
    // Initialize empty array to hold copy of state
    const updatedListState = {};
    updatedListState.objects = objectListState.objects.map((obj) => {
      /* If we reach the object we edited
      create new object with local state
      and push that to the array
      */
      if (obj.objectName === nodeObj.objectName) {
        obj.objectName = nodeObj.objectName;
        obj.fields = nodeObj.fields;
        return obj;
      }
      // Else, push to the array
      return obj;
    });
    updatedListState.databaseChoice = objectListState.databaseChoice;
    // Set global object list state to edited version
    setObjectList(updatedListState);
    // Reset current node object to change form back to objectTypeForm
    setNodeObj({});
    // Reset newField state to the default
    setNewField({ ...defaultField });
  };

  const deleteObject = (e) => {
    // Prevent the page from reloading
    e.preventDefault();
    setUsedDuplicateFields(false);
    // Initialize empty array to hold copy of state
    const updatedListState = {};
    updatedListState.objects = objectListState.objects.filter(
      (obj) => obj.objectName !== nodeObj.objectName,
    );
    // Set global object list state to edited version
    setObjectList(updatedListState);
    // Clear out local state fields
    // setFields([]);
    // clear out objectType input
    // setObjectName('');
    // Reset current node object to change form back to objectTypeForm
    setNodeObj({});
  };

  // Allows users to update current fieldName or type
  const updateFieldName = (inputValue, index) => {
    const newFields = [...nodeObj.fields];
    newFields[index].fieldName = inputValue;
    // Checks to ensure updated field name isn't a duplicate
    setUsedDuplicateFields(false);
    let duplicateField = checkDuplicates(inputValue);
    // Check if updated field name is a duplicate of another field in the same form (local state)
    const otherFields = [...nodeObj.fields];
    otherFields.splice(index, 1);
    // Otherfields is the fields array with all but the current field
    console.log('otherfields: ', otherFields);
    otherFields.forEach((field) => {
      if (field.fieldName === inputValue) duplicateField = true;
    });
    // If updated field is duplicate, change state to show warning
    if (duplicateField) {
      setUsedDuplicateFields(true);
    } else {
      setNodeObj({ ...nodeObj, fields: [...newFields] });
      // setFields([...newFields]);
    }
  };

  const updateFieldType = (inputType, index) => {
    const newFields = [...nodeObj.fields];
    newFields[index].fieldType = inputType;
    // setFields([...newFields]);
    setNodeObj({ ...nodeObj, fields: [...newFields] });
  };

  // Allows users to add new field
  const addField = (fieldItemInput, e) => {
    setUsedDuplicateFields(false);
    // Iterate through all fields to ensure duplicate fieldName isnt added
    const duplicateField = checkDuplicates(fieldItemInput.fieldName);
    // If the field isn't a duplicate, set the field in local state
    duplicateField ? setUsedDuplicateFields(true) : setNodeObj({ ...nodeObj, fields: [...nodeObj.fields, fieldItemInput] });
    e.preventDefault();
    // e.target.value = '';
  };

  const updateObjectRelation = (inputObjType, index) => {
    const newFields = [...nodeObj.fields];
    newFields[index].relatedObjectName = inputObjType;
    // setFields([...newFields]);
    setNodeObj({ ...nodeObj, fields: [...newFields] });
  };

  const updateHasRelation = (inputRelation, index) => {
    const newFields = [...nodeObj.fields];
    newFields[index].hasRelation = inputRelation;
    // setFields([...newFields]);
    setNodeObj({ ...nodeObj, fields: [...newFields] });
  };

  const updateFieldRelation = (inputFieldType, index) => {
    const newFields = [...nodeObj.fields];
    newFields[index].relatedObjectField = inputFieldType;
    // setFields([...newFields]);
    setNodeObj({ ...nodeObj, fields: [...newFields] });
  };

  // Allows users to delete fields
  const deleteField = (fieldIndex, e) => {
    e.preventDefault();
    // Makes it so deleting a duplicate field clears the error message
    setUsedDuplicateFields(false);
    const newFields = nodeObj.fields.filter((field, index) => index !== fieldIndex);
    // setFields([...newFields]);
    setNodeObj({ ...nodeObj, fields: [...newFields] });
  };
  // Checks for duplicates in fields and objects except for the current object type (and fields)
  const checkDuplicates = (itemName) => {
    // Filter out objectListState to not include currently updated object
    const updatedListState = objectListState.objects
      .filter((obj) => obj.objectName !== nodeObj.objectName);
    // Iterate over updated list state, which is a list not including the current node obj
    for (let i = 0; i < updatedListState.length; i += 1) {
      if (updatedListState[i].objectName === itemName) {
        return true;
      }
      for (let j = 0; j < updatedListState[i].fields.length; j += 1) {
        if (updatedListState[i].fields[j].fieldName === itemName) {
          return true;
        }
      }
    }
    // If no duplicate names found, return false
    return false;
  };

  // Renders a number of field items
  const fieldArray = nodeObj.fields.map((field, index) => (
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

  return (
    <div className="object-form mx-2">
      <Form>
        <Form.Group>
          <Form.Row className="row justify-content-center">
            <Form.Label>
              <h4>Update Object</h4>
            </Form.Label>
          </Form.Row>
          <Form.Row className="row justify-content-center">
            <Form.Control
              className="row justify-content-center"
              size="sm"
              type="text"
              placeholder="Name"
              id="object-name"
              style={{ width: 'auto' }}
              value={nodeObj.objectName}
              onChange={(e) => {
                // setObjectName(e.target.value);
                setNodeObj({ ...nodeObj, objectName: e.target.value });
                setUsedDuplicateFields(false);
              }}
            />
          </Form.Row>
        </Form.Group>
      </Form>
      {fieldArray}
      <FieldForm
        addField={addField}
        usedDuplicateFields={usedDuplicateFields}
        newField={newField}
        setNewField={setNewField}
        defaultField={defaultField}
      />
      <Form.Row className="row justify-content-center">
        <Button
          size="sm"
          variant="primary"
          type="submit"
          disabled={usedDuplicateFields}
          onClick={updateObject}
        >
          Update Object
        </Button>
        <Button
          size="sm"
          variant="danger"
          type="submit"
          onClick={deleteObject}
          className="ml-2"
        >
          Delete Object
        </Button>
        <Button
          size="sm"
          variant="secondary"
          type="submit"
          onClick={() => setNodeObj({})}
          className="ml-2"
        >
          Cancel
        </Button>
      </Form.Row>
    </div>
  );
}

export default UpdateForm;
