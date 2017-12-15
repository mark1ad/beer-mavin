import React from 'react';

import NoBeerError from './NoBeerError';
import GoBackBtn from './GoBackBtn';

const BreweryInfoDetails = (props) => {
  return (
    <div className="brewery-info-details">
      {(props.name === undefined) ?
        <NoBeerError /> :

        <div>
          <h2 className="text-center">{props.name}</h2>
          <a href={props.website}>{props.website}</a>
          <div className="brewery-description">
            {props.description}
          </div>

          <GoBackBtn />
        </div>
      }
    </div>
  )
};

export default BreweryInfoDetails;
