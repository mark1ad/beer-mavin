import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/ui/Footer';
import ShowBeerList from './components/ShowBeerList';
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
          <NavBar />
          <Header />
          <FindBeer />
          <Route exact path="/" component={Home} />
          <Route path="/beers/:name" component={ShowBeerList} />
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
