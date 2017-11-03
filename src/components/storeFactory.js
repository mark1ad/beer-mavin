import {
  createStore,
  applyMiddleware
} from 'redux';
import { beers } from './reducers';

let initStore = {
  beers: [
    {name: "Bud Lite", brewery: "Budweiser"},
    {name: "Fat Tire", brewery: "New Belgium"}
  ]
};

initStore = { beers: []}

const logger = store => next => action => {
  // console.groupCollapsed("dispatching ", action.type)
  console.log('prev state ', store.getState());
  console.log('action ', action);
  next(action)
  console.log('next state ', store.getState());
  // console.groupEnd();
}

const storeFactory = (initialState = initStore) =>
  applyMiddleware(logger)(createStore)(beers, initialState)
// const storeFactory = (initialState = initStore) =>
//   (createStore)(beers, initialState)

export default storeFactory;
