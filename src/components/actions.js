import C from './constants';

// Remove all beers from store
export const clearBeers = () =>
({
  type: C.CLEAR_BEERS
})

// Add a single beer to store
export const addBeer = (name, brewery) =>
  ({
    type: C.ADD_BEER,
    name: name,
    brewery: brewery
  })

// Add a list of beers to store
export const addBeers = (beers) =>
({
  type: C.ADD_BEERS,
  beers: beers
})
