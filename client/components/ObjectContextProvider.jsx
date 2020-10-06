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
  // useEffect gets invoked when state changes
  useEffect(() => {
    // Creating an array of objects for query creation
    const feed = [];
    objectListState.objects.forEach((obj) => {
      const newObj = {};
      newObj.objectName = obj.objectName;
      newObj.fields = {};
      obj.fields.forEach((field, index) => {
        newObj.fields[index] = {
          fieldName: field.fieldName,
          fieldType: field.fieldType,
          hasRelation: false, //choose from yes or no
          relatedObjectName: null, //choose from existing object types
          relatedObjectField: null, //choose from existing fields of the chosen object type
          relatedReferenceType: null //choose from "one to one", "one to many", "many to one"
        };
      });
      feed.push(newObj);
    });
    console.log('Context feed:', feed);

    // fetch('/api', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(feed)
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  }, [objectListState]);

  return (
    <ObjectContext.Provider value={[objectListState, setObjectList, nodeObj, setNodeObj]}>
      {props.children}
    </ObjectContext.Provider>
  );
};
