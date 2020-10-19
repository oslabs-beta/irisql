import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/components/App';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it('renders a header', () => {
    expect(wrapper.find('header').text()).toEqual('<HeaderNav />');
  });
});
