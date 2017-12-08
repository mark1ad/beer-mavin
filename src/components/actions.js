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

// Replace beer list with new list of beers
export const setBeers = (beers) =>
({
  type: C.SET_BEER_LIST,
  beers: beers
})

// Set beer to display on beer details page
export const setSelectedBeer = (beer_id) =>
({
  type: C.SET_SELECTED_BEER,
  beer_id: beer_id
})

// Set brewery to display on brewery details page
export const setSelectedBrewery = (brewery) =>
({
  type: C.SET_SELECTED_BREWERY,
  brewery: brewery
});
