// BeerList
//
// Displays list of beers
//
// Attributes:
//  beers: array, required. List of beers to display

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import BeerInfo from './BeerInfo';

class BeerList extends Component {
  render() {
    return (
      <div>
        {(this.props.beers.length === 0) ?
          <p>No Beers Found</p> :
          this.props.beers.map(beer =>
            <BeerInfo name={beer.name}
              breweries={beer.breweries}
              style={beer.style}
              key={beer.id}/>
          )
        }
      </div>
    )
  }
}

BeerList.propTypes = {
  beers: PropTypes.array.isRequired,

}

export default BeerList;
