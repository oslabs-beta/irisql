import React, { useContext } from 'react';
import { Graph } from 'react-d3-graph';
import { ObjectContext } from './ObjectContextProvider';

export default function GraphInterface(props) {
  const [objectListState, setObjectList, nodeObj, setNodeObj] = useContext(
    ObjectContext
  );
  // graph payload (with minimalist structure)
  const data = {
    nodes: objectListState.objects[0] ? getNodes() : [],
    links: objectListState.objects[0] ? getLinks() : []
  };

  // console.log("this is our data", data)

  function getNodes() {
    const nodes = [];
    const blueNodes = [];
    for (let i = 0; i < objectListState.objects.length; i += 1) {
      nodes.push({
        id: objectListState.objects[i].objectName,
        size: 400,
        color: '#0e5679'
      });
      blueNodes.push(objectListState.objects[i].objectName);
      for (let j = 0; j < objectListState.objects[i].fields.length; j += 1) {
        if (
          !blueNodes.includes(objectListState.objects[i].fields[j].fieldName)
        ) {
          nodes.push({
            id: objectListState.objects[i].fields[j].fieldName,
            color: '#ed938f'
          });
        }
      }
    }
    return nodes;
  }

  function getLinks() {
    const links = [];
    for (let i = 0; i < objectListState.objects.length; i += 1) {
      for (let j = 0; j < objectListState.objects[i].fields.length; j += 1) {
        links.push({
          source: objectListState.objects[i].objectName,
          target: objectListState.objects[i].fields[j].fieldName
        });
        // links generated between objects types using relationships
        if(
          objectListState.objects[i].fields[j].hasRelation 
          && 
          objectListState.objects[i].fields[j].relatedObjectName 
          &&
          objectListState.objects[i].fields[j].relatedObjectField
           ){
          links.push({
            source: objectListState.objects[i].objectName, 
            target: objectListState.objects[i].fields[j].relatedObjectName,
            color: '#fad163'
          })
        }
      }
    }
    return links;
  }

  // the graph configuration, you only need to pass down properties
  // that you want to override, otherwise default ones will be used
  const myConfig = {
    directed:true,
    automaticRearrangeAfterDropNode: true,
    collapsible: false,
    height: 0.94 * window.innerHeight,
    width: 0.7 * window.innerWidth,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: false,
    d3: {
      alphaTarget: 0.05,
      gravity: -250,
      linkLength: 120,
      linkStrength: 2
    },
    node: {
      color: '#d3d3d3',
      fontColor: 'black',
      fontSize: 10,
      fontWeight: 'normal',
      highlightColor: 'red',
      highlightFontSize: 14,
      highlightFontWeight: 'bold',
      highlightStrokeColor: 'red',
      highlightStrokeWidth: 1.5,
      mouseCursor: 'crosshair',
      opacity: 0.9,
      renderLabel: true,
      size: 200,
      strokeColor: 'none',
      strokeWidth: 1.5,
      svg: '',
      symbolType: 'circle',
      viewGenerator: null
    },
    link: {
      color: 'lightgray',
      highlightColor: 'red',
      mouseCursor: 'pointer',
      opacity: 1,
      semanticStrokeWidth: true,
      strokeWidth: 3,
      type: 'STRAIGHT'
    }
  };

  // // graph event callbacks
  // const onClickGraph = function () {
  //   window.alert(`Clicked the graph background`);
  // };

  // Onclick, generate a new objectTypeForm with current Node's objectName and fields
  const onClickNode = function (nodeId) {
    // setNodeObj({});
    // Grab object with state corresponding to node clicked
    const currentObj = objectListState.objects.filter(
      obj => obj.objectName === nodeId
    );
    // console.log('current object:', currentObj);
    // Changes current node object in global state
    currentObj[0] ? setNodeObj(currentObj[0]) : null;
  };

  // const onDoubleClickNode = function (nodeId) {
  //   window.alert(`Double clicked node ${nodeId}`);
  // };

  // const onRightClickNode = function (event, nodeId) {
  //   window.alert(`Right clicked node ${nodeId}`);
  // };

  // const onMouseOverNode = function (nodeId) {
  //   window.alert(`Mouse over node ${nodeId}`);
  // };

  // const onMouseOutNode = function (nodeId) {
  //   window.alert(`Mouse out node ${nodeId}`);
  // };

  // const onClickLink = function (source, target) {
  //   window.alert(`Clicked link between ${source} and ${target}`);
  // };

  // const onRightClickLink = function (event, source, target) {
  //   window.alert(`Right clicked link between ${source} and ${target}`);
  // };

  // const onMouseOverLink = function (source, target) {
  //   window.alert(`Mouse over in link between ${source} and ${target}`);
  // };

  // const onMouseOutLink = function (source, target) {
  //   window.alert(`Mouse out link between ${source} and ${target}`);
  // };

  const onNodePositionChange = function (nodeId, x, y) {
    console.log(
      `Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`
    );
  };

  // If we haven't added any object types yet, dont render the graph
  if (objectListState.objects[0]) {
    return (
      <Graph
        id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        // onDoubleClickNode={onDoubleClickNode}
        // onRightClickNode={onRightClickNode}
        // onClickGraph={onClickGraph}
        // onClickLink={onClickLink}
        // onRightClickLink={onRightClickLink}
        // onMouseOverNode={onMouseOverNode}
        // onMouseOutNode={onMouseOutNode}
        // onMouseOverLink={onMouseOverLink}
        // onMouseOutLink={onMouseOutLink}
        onNodePositionChange={onNodePositionChange}
      />
    );
  } else {
    return (
      <div className='m-auto'>
        <h2>Create your first object to get started.</h2>
      </div>
    );
  }
}
