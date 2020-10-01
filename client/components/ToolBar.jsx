import React from "react";
import { Nav } from "react-bootstrap";
import blue from "../../public/images/blue.svg";
import salmon from "../../public/images/salmon.svg";
import arrow from "../../public/images/arrow-short.svg";

export default function ToolBar() {
  return (
    <div className='toolbar'>
      <Nav className='flex-column'>
        <Nav.Link>
          <img src={blue} style={{ height: 50 }} alt='Object type node'></img>
        </Nav.Link>
        <Nav.Link eventKey='link-1'>
          <img src={salmon} style={{ height: 50 }} alt='Field type node'></img>
        </Nav.Link>
        <Nav.Link eventKey='link-2'>
          <img src={arrow} style={{ width: 50 }} alt='Field type node'></img>
        </Nav.Link>
      </Nav>
    </div>
  );
}
