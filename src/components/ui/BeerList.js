// BeerList
//
// Displays list of beers
//
// Attributes:
//  beers: array, required. List of beers to display

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import ShowBeer from '../ShowBeer';

class BeerList extends Component {
  render() {
    return (
      <div className="beer-list">
        {(this.props.beers.length === 0) ?
          <p>No beers found with that name</p> :
          this.props.beers.map(beer =>
            <ShowBeer key={beer.id} beer_id={beer.id} />
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
