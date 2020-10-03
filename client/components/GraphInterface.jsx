import React, { useContext } from 'react';
import { Graph } from 'react-d3-graph';
import { ObjectContext } from './ObjectContextProvider';

export default function GraphInterface(props) {
  const [objectListState, setObjectList] = useContext(ObjectContext);
  // graph payload (with minimalist structure)
  const data = {
    nodes: objectListState.objects
      .map((objType) => {
        return { id: objType.objectName };
      })
      .concat([{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }]),

    links: objectListState.objects
      .map((objType) => {
        return { source: 'Harry', target: objType.objectName };
      })
      .concat([
        { source: 'Harry', target: 'Sally' },
        { source: 'Harry', target: 'Alice' }
      ])

    /*
      nodes: objectListState.objects
        .map((objType) => {
          const objFields = objType.fields.map((field) => {
            return { id: field.fieldName };
          });
          return [{ id: objType.objectName }, ...objFields];
        })
        .concat([{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }]),
      links: objectListState.objects
        .map((objType) => {
          const objLinks = objType.fields.map((field) => {
            return { source: objType.objectName, target: field.fieldName };
          });
          return [{ source: 'Harry', target: objType.objectName }, ...objLinks];
        })
        .concat([
          { source: 'Harry', target: 'Sally' },
          { source: 'Harry', target: 'Alice' }
        ])
      */
  };

  // the graph configuration, you only need to pass down properties
  // that you want to override, otherwise default ones will be used
  const myConfig = {
    // nodeHighlightBehavior: true,
    // node: {
    //   color: 'lightgreen',
    //   size: 120,
    //   highlightStrokeColor: 'blue'
    // },
    // link: {
    //   highlightColor: 'lightblue'
    // },
    // directed: true,
    // staticGraph: false,
    // panAndZoom: false,
    // staticGraphWithDragAndDrop: false

    automaticRearrangeAfterDropNode: true,
    collapsible: true,
    directed: true,
    focusAnimationDuration: 0.75,
    focusZoom: 1,
    height: 400,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: false,
    staticGraphWithDragAndDrop: false,
    width: 600,
    d3: {
      alphaTarget: 0.05,
      gravity: -250,
      linkLength: 120,
      linkStrength: 2,
      disableLinkForce: false
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
      onClickNode: { onClickNode }
    },
    link: {
      color: 'lightgray',
      fontColor: 'black',
      fontSize: 8,
      fontWeight: 'normal',
      highlightColor: 'red',
      highlightFontSize: 8,
      highlightFontWeight: 'normal',
      labelProperty: 'label'
    }
  };

  // // graph event callbacks
  // const onClickGraph = function () {
  //   window.alert(`Clicked the graph background`);
  // };

  const onClickNode = function (nodeId) {
    console.log(`Clicked node ${nodeId}`);
  };

  const onDragMove = function (ev, index, nodeList) {
    console.log(`Triggered event ${ev}`);
  };

  const onDragStart = function () {
    console.log(`Drag started`);
  };

  const onDragEnd = function () {
    console.log(`Drag ended`);
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

  return (
    <Graph
      id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      // onDragMove={onDragMove}
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
}
