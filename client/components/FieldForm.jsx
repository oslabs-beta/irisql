import React, { useState, useContext } from 'react';
import { Form, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { ObjectContext } from './ObjectContextProvider';

function FieldForm (props) {

  const defaultField = {
    fieldName:'',
    fieldType:'String', 
    hasRelation: false,
    relatedObjectName: null, 
    relatedObjectField: null,
    relatedReferenceType: null
  } 

  const [newField, setNewField] = useState(defaultField); 

  const [objectListState, setObjectList] = useContext(ObjectContext);

  // Create array of objectNames for relation dropdown menu
  const objectRelations = objectListState.objects.map(obj => obj.objectName);
  const objectRelationOptions = [<option value={null} disabled selected>Pick Object</option>];
  objectRelations.forEach(obj => {
    objectRelationOptions.push(<option value={obj}>{obj}</option>)
  });

  // Create array of fields for chosen objectName
  const fieldRelations = objectListState.objects.length && newField.relatedObjectName ? 
    objectListState.objects.filter(obj => obj.objectName === newField.relatedObjectName)[0].fields : [];
  const fieldRelationsOptions = [<option value={null} disabled selected>Pick Field</option>];
  fieldRelations.forEach(field => {
      fieldRelationsOptions.push(<option value={field.fieldName}>{field.fieldName}</option>)
  });
  
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
          <Form.Check 
            type="checkbox" 
            label="Relation" 
            className="mb-2" 
            checked={newField.hasRelation}
            onChange={(e) => setNewField({ ...newField, hasRelation: e.target.checked })} 
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2" size="sm" onClick={(e) => {
            props.addField(newField, e)
            setNewField({...defaultField})
            }}>
            +
          </Button>
        </Col>
      </Form.Row>
      {newField.hasRelation && 
        <Form.Row className="align-items-center">
          <Col xs="auto">
          <Form.Control
            as="select"
            className="mb-2"
            id="inlineFormCustomSelect"
            size="sm"
            onChange={(e) => setNewField({...newField, relatedObjectName : e.target.value})}
            custom
          >
            {objectRelationOptions}
          </Form.Control>
          </Col>
          <Col xs="auto">
          <Form.Control
            as="select"
            className="mb-2"
            id="inlineFormCustomSelect"
            size="sm"
            onChange={(e) => setNewField({...newField, relatedObjectField : e.target.value})}
            custom
          >
            {fieldRelationsOptions}
          </Form.Control>
          </Col>
        </Form.Row>
      }
    </Form>
  );
}
 
export default FieldForm;