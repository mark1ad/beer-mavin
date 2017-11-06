import React from 'react';
import ReactDOM from 'react-dom';

import BeerList from './BeerList';

const beers = [
  {id: "1", name: "Bud", brewery: "Budweiser"}
]

const onMount = () => {}

it('renders without crashing without beers', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BeerList onMount={onMount} beers={[]} />, div);
})

it('renders without crashing with beers', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BeerList onMount={onMount} beers={beers} />, div);
})
