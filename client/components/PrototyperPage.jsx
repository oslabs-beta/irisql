import React from 'react';
import ToolBar from './ToolBar';
import { ObjectContextProvider } from './ObjectContextProvider';
import GraphInterface from './GraphInterface';

export default function PrototyperPage() {
  return (
    <ObjectContextProvider>
      <div className='wrapper'>
        <ToolBar />
        <GraphInterface />
      </div>
    </ObjectContextProvider>
  );
}
