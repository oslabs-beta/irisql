import React, { createContext, useState } from 'react';

export const ObjectContext = createContext(
  // Default value for global state
  // objectTypes.objects
);

export const ObjectContextProvider = (props) => {
  // Default state for objectList
  const defaultObjectList = {
    objects: []
  };
  // objectList will include list of objects with objectNames and a fields array
  const [objectListState, setObjectList] = useState(defaultObjectList);

  return (
    <ObjectContext.Provider value={[objectListState, setObjectList]}>
      {props.children}  
    </ObjectContext.Provider>
  );
}


