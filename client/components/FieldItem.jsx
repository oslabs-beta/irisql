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
  const objectRelationOptions = [<option value={null} key={'obj-' + 0} disabled selected>Pick Object</option>];
  objectRelations.forEach((obj,index) => {
    objectRelationOptions.push(<option value={obj} key={'obj-' + index+1}>{obj}</option>)
  });

  // Create array of fields for chosen objectName
  const fieldRelations = objectListState.objects.length && props.info.relatedObjectName ? 
    objectListState.objects.filter(obj => obj.objectName === props.info.relatedObjectName)[0].fields : [];
  const fieldRelationsOptions = [<option value={null} key={'field-' + 0} disabled selected>Pick Field</option>];
  fieldRelations.forEach((field,index) => {
      fieldRelationsOptions.push(<option value={field.fieldName} key={'field-' + index + 1}>{field.fieldName}</option>)
  });

  return (
    <Form className="field-item">
      <Form.Row className="align-items-center">
        <Col xs="auto">
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Field Name"
            size="sm"
            value={props.info.fieldName}
            onChange={(e) => { props.updateFieldName(e.target.value, props.ind) }}
          />
        </Col>
        <Col xs="auto" >
          <Form.Control
            as="select"
            className="mb-2"
            id="inlineFormCustomSelect"
            size="sm"
            value={props.info.fieldType}
            onChange={(e) => { props.updateFieldType(e.target.value, props.ind) }}
            custom
          >
            <option value="GraphQLString">String</option>
            <option value="GraphQLBoolean">Boolean</option>
            <option value="GraphQLInt">Integer</option>
            <option value="GraphQLID">ID</option>
          </Form.Control>
        </Col>
        <Col xs="auto">
          <Form.Check
            type="checkbox"
            label="Relation"
            className="mb-2"
            checked={props.info.hasRelation}
            onChange={(e) => props.updateHasRelation(e.target.checked, props.ind)}
          />
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
              onChange={(e) => props.updateObjectRelation(e.target.value, props.ind)}
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
              onChange={(e) => props.updateFieldRelation(e.target.value, props.ind)}
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