import deepFreeze from 'deep-freeze';
import { beer, beers } from "./reducers";
import { addBeer, clearBeers } from "./actions";

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
  const action = addBeer( newBeer.id, newBeer.name, newBeer.brewery);
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
  const action = addBeer(newBeer.id, newBeer.name, newBeer.brewery);
  const expected_result = [ newBeer ];
  deepFreeze(state);
  deepFreeze(action);
  const results = beers(state, action);
  expect(results).toEqual(expected_result);
})

it("add beer to store with beers", () => {
  const state = beerList;
  const action = addBeer(newBeer.id, newBeer.name, newBeer.brewery);
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
