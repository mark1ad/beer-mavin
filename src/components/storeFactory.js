import {
  createStore,
  applyMiddleware
} from 'redux';
import { beers } from './reducers';

const logger = store => next => action => {
  // console.groupCollapsed("dispatching ", action.type)
  console.log('prev state ', store.getState());
  console.log('action ', action);
  next(action)
  console.log('next state ', store.getState());
  // console.groupEnd();
}

// const storeFactory = (initialState = {}) =>
  // applyMiddleware(logger)(createStore)(beers, initialState)
const storeFactory = (initialState = {}) =>
  (createStore)(beers, initialState)

export default storeFactory;
