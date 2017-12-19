import {
    clearBeers,
    addBeer,
    setSelectedBeer,
    setSelectedBrewery,
    setBeerSearchTerm
  } from './actions';
import C from './constants';
import Brewery from './helpers/Brewery';
import beerData from '../test_data/test_data.json';

it('action clearBeers', () => {
  const action = clearBeers();
  expect(action).toEqual({type: C.CLEAR_BEERS })
})

it('action  addBeer', () => {
  const action = addBeer({id: "1", name: "Beer", brewery: "Brewery"});
  expect(action).toEqual({
    type: C.ADD_BEER,
    id: "1",
    name: "Beer",
    brewery: "Brewery"
  })
})

it('action setSelectedBeer', () => {
  const action = setSelectedBeer("beer_id");
  expect(action).toEqual({
    type: C.SET_SELECTED_BEER,
    beer_id: "beer_id"
  })
})

it('action setSelectedBrewery with data', () => {
  const newBrewery = new Brewery(beerData[0].breweries[0]);
  const action = setSelectedBrewery(newBrewery);
  expect(action).toEqual({
    type: C.SET_SELECTED_BREWERY,
    brewery: newBrewery
  })
});

it('action setBeerSearchTerm', () => {
  const action = setBeerSearchTerm("beer name");
  expect(action).toEqual({
    type: C.SET_BEER_SEARCH_TERM,
    name: "beer name"
  })
});
