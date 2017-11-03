import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import storeFactory from './components/storeFactory';
import { addBeers } from './components/actions';

const loadData = (store) => {
  const address = "http://localhost:3000/beers";
  axios.get(address)
    .then( res => {
      store.dispatch(addBeers(res.data))
    })
}


const store = storeFactory();
// TODO: move loading store to more appriopriate place
loadData(store)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
