import C from './constants';

export const beers = (state={}, action) => {
  switch (action.type) {
    case C.ADD_BEER:
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
      return {
        beers: [
          ...state.beers,
          ...action.beers
        ]
      }
    default:
      return state;
  }
}
