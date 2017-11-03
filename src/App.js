import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Beers from './components/Beers';

// TODO: Use other router type insteaad of HashRouter?
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Beers} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
