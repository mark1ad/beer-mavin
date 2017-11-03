import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Beers from './components/Beers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Beers />
      </div>
    );
  }
}

export default App;
