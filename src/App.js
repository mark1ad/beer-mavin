import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import FindBeer from './components/FindBeer';

// TODO: Use other router type insteaad of HashRouter?
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <FindBeer />
          <Route path="/search" component={SearchResults} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
