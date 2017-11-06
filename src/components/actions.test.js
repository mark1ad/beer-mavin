import { clearBeers, addBeer } from './actions';
import C from './constants';

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
