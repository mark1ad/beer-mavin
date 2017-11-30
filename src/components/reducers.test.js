import deepFreeze from 'deep-freeze';
import { beer, beers, selectedBeer } from "./reducers";
import { addBeer, clearBeers, setSelectedBeer } from "./actions";
import beerData from '../test_data/test_data.json';

const beerList = [
  {
    name: "5 Barrel",
    brewery: "Odell"
  },
  {
    name: "Coors",
    brewery: "Coors"
  }
]

const newBeer = {
  id: "1",
  name: "Miller Lite",
  brewery: "Miller"
}

// **************************
// Test beer reducer

it("beer default success", () => {
  const action = { type: ""}
  deepFreeze(action);
  const results = beer(undefined, action);
  expect(results).toEqual({});
})

it( "beer add beer", () => {
  const state = {};
  const action = addBeer( newBeer);
  deepFreeze(state);
  deepFreeze(action);
  const results = beer(state, action);
  expect(results).toEqual(newBeer);
})

// ***************************
// Test beers reducer

// Check handling unknown action type, should return empty state
it("default success", () => {
  const state = [];
  const action = { type: "" }
  deepFreeze(state);
  deepFreeze(action);
  const results = beers(undefined, action);
  expect(results).toEqual(state);
})

it("add first beer", () => {
  const state = [];
  const action = addBeer( newBeer);
  const expected_result = [ newBeer ];
  deepFreeze(state);
  deepFreeze(action);
  const results = beers(state, action);
  expect(results).toEqual(expected_result);
})

it("add beer to store with beers", () => {
  const state = beerList;
  const action = addBeer( newBeer);
  deepFreeze(state);
  deepFreeze(action);
  const expected_result = [
    ...beerList,
    newBeer
  ]
  const results = beers(state, action);
  expect(results).toEqual(expected_result);
})


it("clear beers", () => {
  const state = beerList;
  const action = clearBeers();
  deepFreeze(state);
  deepFreeze(action);
  const results = beers(state, action);
  expect(results).toEqual([]);
})

// SelectedBeer
it("set selected beer", () => {
  const state = {};
  const action = setSelectedBeer( "test_beer_id");
  deepFreeze(state);
  deepFreeze(action);
  const results = selectedBeer( state, action);
  expect(results).toEqual("test_beer_id");
})
