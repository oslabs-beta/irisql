import React from "react";
import ToolBar from "./ToolBar";
import {ObjectContextProvider} from './ObjectContextProvider';

export default function PrototyperPage() {
  return (
    <ObjectContextProvider>
      <div className='wrapper'>
        <ToolBar />
      </div>
    </ObjectContextProvider>
  );
}
