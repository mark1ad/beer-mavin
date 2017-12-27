import React from 'react';

import NoBeerError from './NoBeerError';
import GoBackBtn from './GoBackBtn';
import ShowSelectedBreweryName from '../ShowSelectedBreweryName';
import ShowBreweryDescription from '../ShowBreweryDescription';

const BreweryInfoDetails = (props) => {
  return (
    <div className="brewery-info-details">
      {(props.brewery === null) ?
        <NoBeerError /> :

        <div>
          <ShowSelectedBreweryName />
          <a href={props.brewery.website}>{props.brewery.website}</a>

          <ShowBreweryDescription />

          <GoBackBtn />
        </div>
      }
    </div>
  )
};

export default BreweryInfoDetails;
