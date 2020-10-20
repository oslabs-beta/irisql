import React, { createContext, useState } from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ObjectTypeForm from '../client/components/ObjectTypeForm';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('ObjectType unit tests', () => {
  let wrapper;
  let ObjectContext;
  let objectListState;

  beforeAll(() => {
    ObjectContext = createContext();
    objectListState = {
      databaseChoice: 'MongoDB',
      objects: [{
        objectName: 'Movie',
        fields: [
          {
            fieldName: 'id',
            fieldType: 'GraphQLString',
            hasRelation: false,
            relatedObjectName: null,
            relatedObjectField: null,
            relatedReferenceType: null,
          },
          {
            fieldName: 'movieName',
            fieldType: 'GraphQLString',
            hasRelation: false,
            relatedObjectName: null,
            relatedObjectField: null,
            relatedReferenceType: null,
          },
        ],
      }],
    };

    wrapper = shallow(
      <ObjectContext.Provider value={[objectListState]}>
        <ObjectTypeForm />
      </ObjectContext.Provider>,
    );
  });

  it('renders an ObjectTypeForm correctly', () => {
    expect(wrapper.text()).toEqual('<ObjectTypeForm />');
  });
});
