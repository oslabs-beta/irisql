import React, { useContext } from 'react';
import ToolBar from './ToolBar';
import { ObjectContext } from './ObjectContextProvider';
import GraphInterface from './GraphInterface';
import CodeInterface from './CodeInterface';

export default function PrototyperPage() {

  const [objectListState, setObjectList, nodeObj, setNodeObj, viewCode, setViewCode] = useContext(ObjectContext);
  
  return (
      <div className='wrapper'>
        <ToolBar />
        {viewCode.displayCode ? <CodeInterface /> : <GraphInterface />}
      </div>
  );
}
