import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/components/App';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
