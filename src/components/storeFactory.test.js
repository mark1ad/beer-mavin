import storeFactory from './storeFactory';

import { addBeer } from './actions';

const beers = [
  {
    id: "1",
    name: "Fat Tire",
    brewery: "New Belgium"
  },
  {
    id: "2",
    name: "Nib Knot",
    brewery: "Jessup Farm Barrel House"
  }
];
let store;

beforeAll(() => {
  store = storeFactory({beers: beers})
  store.dispatch(addBeer("3", "Hey!", "Mine"))
})

it("should add a new beer", () => {
  expect(store.getState().beers.length).toBe(3)
})
