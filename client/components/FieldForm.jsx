import React, { useContext } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { ObjectContext } from './ObjectContextProvider';

function FieldForm(props) {
  // eslint-disable-next-line no-unused-vars
  const [objectListState, setObjectList] = useContext(ObjectContext);

  // Create array of objectNames for relation dropdown menu
  const objectRelations = objectListState.objects.map((obj) => obj.objectName);
  const objectRelationOptions = [<option value={null} disabled selected>Pick Object</option>];
  objectRelations.forEach((obj) => {
    objectRelationOptions.push(<option value={obj}>{obj}</option>);
  });

  // Create array of fields for chosen objectName
  const fieldRelations = objectListState.objects.length && props.newField.relatedObjectName
    ? objectListState.objects
      .filter((obj) => obj.objectName === props.newField.relatedObjectName)[0].fields : [];
  const fieldRelationsOptions = [<option value={null} disabled selected>Pick Field</option>];
  fieldRelations.forEach((field) => {
    fieldRelationsOptions.push(<option value={field.fieldName}>{field.fieldName}</option>);
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
            value={props.newField.fieldName}
            onChange={(e) => props.setNewField({ ...props.newField, fieldName: e.target.value })}
          />
        </Col>
        <Col xs="auto">
          <Form.Control
            as="select"
            className="mb-2"
            id="inlineFormCustomSelect"
            size="sm"
            value={props.newField.fieldType}
            onChange={(e) => props.setNewField({ ...props.newField, fieldType: e.target.value })}
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
            checked={props.newField.hasRelation}
            onChange={(e) => props.setNewField({
              ...props.newField,
              hasRelation: e.target.checked,
            })}
          />
        </Col>
        <Col xs="auto">
          <Button
            type="submit"
            className="mb-2"
            size="sm"
            onClick={(e) => {
              props.addField(props.newField, e);
              props.setNewField({ ...props.defaultField });
            }}
          >
            +
          </Button>
        </Col>
      </Form.Row>
      {/* If user attempts to enter field with same name as objectType or other field */}
      {props.usedDuplicateFields
        && (
        <Form.Text className="duplicate-fields-warning text-danger mb-2">
          Duplicate field or object name used. Try another one.
        </Form.Text>
        )}
      {/* If the user checks the has relation box */}
      {props.newField.hasRelation
        && (
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Control
              as="select"
              className="mb-2"
              id="inlineFormCustomSelect"
              size="sm"
              onChange={(e) => props.setNewField({
                ...props.newField,
                relatedObjectName: e.target.value,
              })}
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
              onChange={(e) => props.setNewField({
                ...props.newField,
                relatedObjectField: e.target.value,
              })}
              custom
            >
              {fieldRelationsOptions}
            </Form.Control>
          </Col>
        </Form.Row>
        )}
    </Form>
  );
}

export default FieldForm;
