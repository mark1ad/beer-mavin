import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import BeerInfo from './BeerInfo';
import beerData from '../../test_data/test_data.json';
import Brewery from '../helpers/brewery';

it('dummy', () => {

})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<BeerInfo name="name" breweries={[]} />, div);
// })

// Snapshot test
// it("snapshot test", () => {
//   const breweries = [ new Brewery(beerData[0].breweries[0]) ];
//   let output = shallow(
//     <BeerInfo name="zippy" breweries={breweries} />
//   ).html()
//   expect(output).toEqual("<div><p>zippy, pinhead</p></div>")
// })
