import React from 'react';
import { PropTypes } from 'prop-types';

import ShowBrewery from '../ShowBrewery';

const BreweryList = (props) => {
  return (
    <div>
      {props.breweries.map(brewery =>
        <ShowBrewery key={brewery.id} brewery={brewery} />
      )}
    </div>
  )
};

BreweryList.propTypes = {
  breweries: PropTypes.array.isRequired
};

export default BreweryList;
