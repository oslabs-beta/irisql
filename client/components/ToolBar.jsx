/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { ObjectContext } from './ObjectContextProvider';
import ObjectTypeForm from './ObjectTypeForm';

export default function ToolBar() {
  const [
    objectListState,
    setObjectList,
    nodeObj,
    setNodeObj,
    viewCode,
    setViewCode] = useContext(ObjectContext);

  return (
    <div className="toolbar">
      <Nav className="flex-column">
        <ObjectTypeForm />
      </Nav>
      <div className="mx-auto mb-1">
        <Button
          size="sm"
          variant="primary"
          type="submit"
          onClick={() => (
            viewCode.displayCode
              ? setViewCode({ ...viewCode, displayCode: false })
              : setViewCode({ ...viewCode, displayCode: true }))}
        >
          {viewCode.displayCode ? 'View Graph' : 'View Code'}
        </Button>
      </div>
    </div>
  );
}
