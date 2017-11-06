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
const newBeer = {
  id: "3",
  name: "Hey!",
  brewery: "Mine"
}
let store;

beforeAll(() => {
  store = storeFactory({beers: beers})
  store.dispatch(addBeer(newBeer))
})

//**********************
// Check results from adding a new beer in beforeAll()
it("should add a new beer", () => {
  expect(store.getState().beers.length).toBe(3)
})

it("check value of beer added", () => {
  const addedBeer = store.getState().beers[2];
  expect(addedBeer).toEqual(newBeer);
})
// End check adding new beer
//**********************

it("use default store", () => {
  store = storeFactory()
  expect(store.getState().beers.length).toBe(0)
})
