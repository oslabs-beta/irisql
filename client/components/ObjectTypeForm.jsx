import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap'
import FieldForm from './FieldForm'


function ObjectTypeForm () {

  const [fields, setFields] = useState([]); 

  return (
    <div className="object-form">
      <Form>
        <Form.Group controlId="ObjectInfo">
          <Form.Label>Create Object</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
          <FieldForm />
        <Button variant="primary" type="submit">
          Create Object
        </Button>
      </Form>
    </div>
  );
}
 
export default ObjectTypeForm;