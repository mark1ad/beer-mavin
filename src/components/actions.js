import C from './constants';

export const addBeer = (name, brewery) =>
  ({
    type: C.ADD_BEER,
    name: name,
    brewery: brewery
  })

export const addBeers = (beers) =>
({
  type: C.ADD_BEERS,
  beers: beers
})
