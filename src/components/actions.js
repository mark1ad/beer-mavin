import C from './constants';

// Remove all beers from store
export const clearBeers = () =>
({
  type: C.CLEAR_BEERS
})

// Add a single beer to store
export const addBeer = ({id, name, brewery}) =>
  ({
    type: C.ADD_BEER,
    id: id,
    name: name,
    brewery: brewery
  })
