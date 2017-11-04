import C from './constants';

export const beers = (state={}, action) => {
  switch (action.type) {
    case C.ADD_BEER:
      // add a single beer to the state
      let beers = state.beers !== undefined ? state.beers : [];
      return {
        beers: [
          ...beers,
          {
            name: action.name,
            brewery: action.brewery
          }
        ]
      }
    case C.ADD_BEERS:
      // add a list of beers to the state
      return {
        beers: [
          ...state.beers,
          ...action.beers
        ]
      }
    case C.CLEAR_BEERS:
      // remove all beers from state
      return { beers: []}
    default:
      // do nothing
      return state;
  }
}
