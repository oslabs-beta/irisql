// Just a file to show that jest is working and doing its thing

function addTwo(num) {
  return num + 2;
}

describe('Unit tests', () => {
  // it('renders app without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });
  it('adds two correctly', () => {
    const num = 2;
    const expected = 4;
    const actually = addTwo(num);
    expect(actually).toEqual(expected);
  });
});
