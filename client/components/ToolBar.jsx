import React, {useContext} from "react";
import {ObjectContext} from './ObjectContextProvider';
import { Nav, Button, Dropdown, DropdownButton } from "react-bootstrap";
import blue from "../../public/images/blue.svg";
import salmon from "../../public/images/salmon.svg";
import arrow from "../../public/images/arrow-short.svg";
import ObjectTypeForm from './ObjectTypeForm'


export default function ToolBar() {
  const [objectListState, setObjectList, nodeObj, setNodeObj, viewCode, setViewCode] = useContext(ObjectContext);

  return (
    <div className='toolbar'>
      {/* <DropdownButton
        key={'db-toggle'}
        drop='right'
        variant="secondary"
        title={` MongoDB (Default) `}
      >
          <Dropdown.Item eventKey="1">MongoDB</Dropdown.Item>
          <Dropdown.Item eventKey="2">PostgreSQL</Dropdown.Item>
      </DropdownButton> */}
      <Nav className='flex-column'>
        <ObjectTypeForm />
      </Nav>
        <div className="mx-auto mb-1">
          <Button 
          size='sm'
          variant='primary'
          type='submit'
          onClick={() => 
          viewCode.displayCode ? setViewCode({...viewCode,displayCode:false}) : setViewCode({...viewCode,displayCode:true})}>
          {viewCode.displayCode ? 'View Graph' : 'View Code'}
          </Button>
        </div>
    </div>
  );
}
