import React from 'react';
import { PropTypes } from 'prop-types';
import BeerInfo from './BeerInfo';

const BeerList = ({beers}) =>
  <div>
    {(beers.length === 0) ?
      <p>No Beers Found</p> :
      beers.map(beer =>
        <BeerInfo name={beer.name} brewery={beer.brewery}/>
      )
    }
  </div>

BeerList.propTypes = {
  beers: PropTypes.array.isRequired
}

export default BeerList;
