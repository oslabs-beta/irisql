import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import HeaderNav from '../client/components/HeaderNav';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('HeadNav unit tests', () => {
  let wrapper;
  let tree;

  beforeAll(() => {
    wrapper = shallow(<HeaderNav />);
    tree = renderer.create(
      <Router>
        <HeaderNav />
      </Router>,
    ).toJSON();
  });

  it('renders a Navbar with correct text', () => {
    expect(wrapper.find('Navbar').text()).toEqual('FeaturesDemoTeam');
  });

  it('renders nav element', () => {
    expect(tree.type).toEqual('nav');
  });
});
