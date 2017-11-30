import { clearBeers, addBeer, setSelectedBeer } from './actions';
import C from './constants';
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
  const action = setSelectedBeer(beerData[0]);
  expect(action).toBeDefined();
  expect(action.type).toEqual(C.SET_SELECTED_BEER);
  expect(action.beer.name).toEqual("Fat Tire");
})
