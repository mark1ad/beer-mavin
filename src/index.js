import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import storeFactory from './components/storeFactory';

// TODO: set url
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
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
