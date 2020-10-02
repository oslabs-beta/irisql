import React, { useState } from 'react';
import { Form, Button, Col} from 'react-bootstrap'
import FieldForm from './FieldForm'
import FieldItem from './FieldItem';


function ObjectTypeForm () {

  const [fields, setFields] = useState([]);

  const updateField = (inputValue) => {
    setFields([{fieldName:inputValue}])
  }
  const fieldArray = fields.map( field => <FieldItem info={field} update = {updateField}/>); 


  const addField = (fieldItemInput, e) => {
      setFields([...fields,fieldItemInput])
      e.preventDefault();
      //e.target.value = '';
  }


  return (
    <div className="object-form">
      <Form>
        <Form.Group controlId="ObjectInfo">
        <Form.Row class="row justify-content-center">
          <Form.Label>Create Object</Form.Label>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
            <Form.Control size="sm" type="text" placeholder="Name" style={{width:"auto"}}/>
          </Col>
          <Col xs="auto">
            <Button size="sm" variant="primary" type="submit">
            Create Object
            </Button>
          </Col>
      </Form.Row>
        </Form.Group>
        {fieldArray}
        <FieldForm addField={addField}/>
      </Form>
    </div>
  );
}
 
export default ObjectTypeForm;