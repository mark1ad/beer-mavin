import storeFactory from './storeFactory';

import { addBeer } from './actions';

const beers = [
  {
    name: "Fat Tire",
    brewery: "New Belgium"
  },
  {
    name: "Nib Knot",
    brewery: "Jessup Farm Barrel House"
  }
];
let store;

beforeAll(() => {
  store = storeFactory({beers})
  store.dispatch(addBeer("Hey!", "Mine"))
})

it("should add a new beer", () =>
  expect(store.getState().beers.length).toBe(3)
)
