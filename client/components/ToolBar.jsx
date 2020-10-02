import React from "react";
import { Nav } from "react-bootstrap";
import blue from "../../public/images/blue.svg";
import salmon from "../../public/images/salmon.svg";
import arrow from "../../public/images/arrow-short.svg";
import ObjectTypeForm from './ObjectTypeForm'

export default function ToolBar() {
  return (
    <div className='toolbar'>
      <Nav className='flex-column'>
        <ObjectTypeForm />
      </Nav>
    </div>
  );
}
