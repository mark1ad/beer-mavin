import React from 'react';
import ReactDOM from 'react-dom';

import BeerList from './BeerList';

const beers = [
  {id: "1", name: "Bud", breweries: [{id: 1, name: "Budweiser"}]}
]

const onMount = () => {}

it('dummy', () => {

})

// it('renders without crashing without beers', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<BeerList onMount={onMount} beers={[]} />, div);
// })
//
// it('renders without crashing with beers', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<BeerList onMount={onMount} beers={beers} />, div);
// })
