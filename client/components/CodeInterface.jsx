/* eslint-disable no-unused-vars */
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/neat.css';
import React, { useContext } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { ObjectContext } from './ObjectContextProvider';

function CodeInterface() {
  const [
    objectListState,
    setObjectList,
    nodeObj,
    setNodeObj,
    viewCode,
    setViewCode] = useContext(ObjectContext);

  return (
    <CodeMirror
      value={viewCode.responseCode}
      options={{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
      }}
    />
  );
}

export default CodeInterface;
