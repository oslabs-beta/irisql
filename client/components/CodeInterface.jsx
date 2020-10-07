

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/neat.css';
import { ObjectContext } from './ObjectContextProvider';
import React, { useContext } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';

function CodeInterface () {

  const [objectListState, setObjectList, nodeObj, setNodeObj, viewCode, setViewCode] = useContext(ObjectContext);

  return (
    <CodeMirror
      value={viewCode.responseCode}
      options={{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true
      }}
      onChange={(editor, value) => {
      console.log('uncontrolled', {value});
    }}/>
  )
}

export default CodeInterface; 
