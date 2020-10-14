import React, { Component, useContext } from 'react';
import { Form, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { ObjectContext } from './ObjectContextProvider';

const FieldItem  = (props) => {
  // const fieldName = props.info.fieldName;

  const [objectListState, setObjectList, nodeObj, setNodeObj] = useContext(
    ObjectContext
  );

  // Create array of objectNames for relation dropdown menu
  const objectRelations = objectListState.objects.map(obj => obj.objectName);
  const objectRelationOptions = [];
  objectRelations.forEach(obj => {
    objectRelationOptions.push(<option value={obj}>{obj}</option>)
  });

  // Create array of fields for chosen objectName
  const fieldRelations = objectListState.objects.length ? 
    objectListState.objects.filter(obj => obj.objectName === props.info.relatedObjectName)[0].fields : [];
  const fieldRelationsOptions = [];
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
        <option value="GraphQLString">String</option>
        <option value="GraphQLBoolean">Boolean</option>
        <option value="GraphQLInt">Integer</option>
        <option value="GraphQLID">ID</option>
      </Form.Control>
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2 btn-danger" size="sm" onClick={(e) => props.deleteField(props.ind, e)}>
        - 
      </Button>
    </Col>
  </Form.Row>
  {props.info.hasRelation && 
        <Form.Row className="align-items-center">
          <Col xs="auto">
          <Form.Control
            as="select"
            className="mb-2"
            id="inlineFormCustomSelect"
            size="sm"
            defaultValue={props.info.relatedObjectName}
            //onChange={(e) => setNewField({...newField, relatedObjectName : e.target.value})}
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
            defaultValue={props.info.relatedObjectField}
            //onChange={(e) => setNewField({...newField, relatedObjectField : e.target.value})}
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
 
export default FieldItem;