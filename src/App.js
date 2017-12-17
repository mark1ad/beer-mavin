import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/ui/Footer';
import SearchResults from './components/SearchResults';
import FindBeer from './components/FindBeer';
import Home from './components/ui/Home';
import About from './components/ui/About';
import ShowBeerDetails from './components/ShowBeerDetails';
import ShowBreweryDetails from './components/ShowBreweryDetails';

// TODO: Use other router type insteaad of HashRouter?
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <FindBeer />
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchResults} />
          <Route path="/beer/:id" component={ShowBeerDetails} />
          <Route path="/brewery/:id" component={ShowBreweryDetails} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
