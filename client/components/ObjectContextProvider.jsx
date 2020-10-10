import React, { createContext, useState, useEffect } from 'react';

export const ObjectContext = createContext();
// Default value for global state
// objectTypes.objects

export const ObjectContextProvider = (props) => {
  // Default state for objectList
  const defaultObjectList = {
    objects: []
  };
  // objectList will include list of objects with objectNames and a fields array
  const [objectListState, setObjectList] = useState(defaultObjectList);
  // This state only gets changed when a node is clicked, so we can keep track of the current node clicked
  const [nodeObj, setNodeObj] = useState({});
  // This state controls if codemirror editor is rendered or not
  const [viewCode, setViewCode] = useState({
    displayCode:false,
    responseCode: ''
  });

  // useEffect gets invoked when state changes
  useEffect(() => {
    // Creating an array of objects for query creation
    const feed = [];
    objectListState.objects.forEach((obj) => {
      const newObj = {};
      newObj.objectName = obj.objectName;
      newObj.fields = {};
      obj.fields.forEach((field, index) => {
        newObj.fields[index] = field;
      });
      feed.push(newObj);
    });
    console.log('Context feed:', feed);

    fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feed)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('this is the server response',data)
        setViewCode({...viewCode,responseCode:data})})
      .catch((err) => console.log(err));
  }, [objectListState]);

  return (
    <ObjectContext.Provider value={[objectListState, setObjectList, nodeObj, setNodeObj, viewCode, setViewCode]}>
      {props.children}
    </ObjectContext.Provider>
  );
};
