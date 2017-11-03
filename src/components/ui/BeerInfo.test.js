import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import BeerInfo from './BeerInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BeerInfo />, div);
})

// Snapshot test
it("snapshot test", () => {
  let output = shallow(
    <BeerInfo name="zippy" brewery="pinhead" />
  ).html()
  expect(output).toEqual("<div><p>zippy, pinhead</p></div>")
})
