import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/components/App.jsx';
import ObjectTypeForm from '../client/components/ObjectTypeForm.jsx';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('App tests', () => {
  it('renders app without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

// describe('ObjectTypeForm tests', () => {
//   let wrapper;
//   let objectListState = {
//     databaseChoice: 'MongoDB', // the other choice is "PostgreSQL"
//     objects: [
//       {
//         objectName: 'Movie',
//         fields: [
//           {
//             fieldName: 'id',
//             fieldType: 'GraphQLString',
//             hasRelation: false,
//             relatedObjectName: null,
//             relatedObjectField: null,
//             relatedReferenceType: null,
//           },
//           {
//             fieldName: 'movieName',
//             fieldType: 'GraphQLString',
//             hasRelation: false,
//             relatedObjectName: null,
//             relatedObjectField: null,
//             relatedReferenceType: null,
//           },
//           {
//             fieldName: 'directorId',
//             fieldType: 'GraphQLString',
//             hasRelation: true,
//             relatedObjectName: 'director',
//             relatedObjectField: 'directorId',
//             relatedReferenceType: 'one to one',
//           },
//         ],
//       },
//       {
//         objectName: 'Director',
//         fields: [
//           {
//             fieldName: 'id',
//             fieldType: 'GraphQLString',
//             hasRelation: false,
//             relatedObjectName: null,
//             relatedObjectField: null,
//             relatedReferenceType: null,
//           },
//           {
//             fieldName: 'directorName',
//             fieldType: 'GraphQLString',
//             hasRelation: false,
//             relatedObjectName: null,
//             relatedObjectField: null,
//             relatedReferenceType: null,
//           },
//         ],
//       },
//     ],
//   };

//   beforeAll(() => {
//     wrapper = shallow(<ObjectTypeForm />);
//   });

//   it('renders a <div> tag', () => {
//     expect(wrapper.type()).toEqual('div');
//   });
// });
