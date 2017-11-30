import C from './constants';
import Beer from './helpers/beer';

export const beer = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_BEER:
      return {
        id: action.id,
        name: action.name,
        brewery: action.brewery
      }
    default:
      return state;
  }
}

export const beers = (state=[], action) => {
  switch (action.type) {
    case C.ADD_BEER:
      // add a single beer to the state
      const beers = [
        ...state,
        beer({}, action)
      ]
      return beers;
    case C.CLEAR_BEERS:
      // remove all beers from state
      return []
    case C.SET_BEER_LIST:
      const beerList = action.beers.map(beer =>
        new Beer(beer)
      )
      return beerList;
    default:
      // do nothing
      return state;
  }
}

export const selectedBeer = (state={}, action) => {
  switch (action.type) {
    case C.SET_SELECTED_BEER:
      return action.beer;
    default:
      return state;
  }
}
