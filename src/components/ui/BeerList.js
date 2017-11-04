// BeerList
//
// Displays list of beers
//
// Attributes:
//  onMount: function, required. Callback for when BeerList mounts
//  beers: array, required. List of beers to display

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import BeerInfo from './BeerInfo';

class BeerList extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        {(this.props.beers.length === 0) ?
          <p>No Beers Found</p> :
          this.props.beers.map(beer =>
            <BeerInfo name={beer.name} brewery={beer.brewery} key={beer.id}/>
          )
        }
      </div>
    )
  }
}

BeerList.propTypes = {
  beers: PropTypes.array.isRequired,
  onMount: PropTypes.func.isRequired
}

export default BeerList;
