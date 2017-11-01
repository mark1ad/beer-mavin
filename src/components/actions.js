import C from './constants';

export const addBeer = (name, brewery) =>
  ({
    type: C.ADD_BEER,
    name: name,
    brewery: brewery
  })
