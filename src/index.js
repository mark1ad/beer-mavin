import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import storeFactory from './components/storeFactory';

// TODO: set url
let baseURL;
console.log(window.location);
if (window.location.host === 'localhost:3001') {
  baseURL = 'http://localhost:3000';
} else {
  baseURL = 'https://beer-mavin-api.herokuapp.com';
}
const axiosInstance = axios.create({
  baseURL: baseURL
})

global.axiosInstance = axiosInstance;

export const store = storeFactory();
global.store = store;
// TODO: move loading store to more appriopriate place
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
