import deepFreeze from 'deep-freeze';
import { beers } from "./reducers";
import { addBeer } from "./actions";

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
  name: "Miller Lite",
  brewery: "Miller"
}

// Check handling unknown action type, should return empty state
it("default success", () => {
  const state = {};
  const action = { type: "" }
  deepFreeze(state);
  deepFreeze(action);
  const results = beers(state, action);
  expect(results).toEqual(state);
})

it("add first beer", () => {
  const state = {};
  const action = addBeer("Miller Lite", "Miller");
  const expected_result = {
    beers: [
      {
        name: "Miller Lite",
        brewery: "Miller"
      }
    ]
  }
  deepFreeze(state);
  deepFreeze(action);
  const results = beers(state, action);
  expect(results).toEqual(expected_result);
})

it("add beer to store with beers", () => {
  const state = { beers: beerList };
  const action = addBeer(newBeer.name, newBeer.brewery);
  deepFreeze(state);
  deepFreeze(action);
  const expected_result = {
    beers: [
      ...beerList,
      newBeer
    ]
  }
  const results = beers(state, action);
  expect(results).toEqual(expected_result);
})
