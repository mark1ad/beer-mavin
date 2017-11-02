import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import BeerDisplay from './BeerDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BeerDisplay />, div);
})

// Snapshot test
it("snapshot test", () => {
  let output = shallow(
    <BeerDisplay />
  ).html()
  expect(output).toMatchSnapshot()
})
