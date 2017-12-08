import React from 'react';
import { withRouter } from 'react-router-dom';

import NoBeerError from './NoBeerError';

const BreweryInfoDetails = (props) => {
  const goBack = e => {
    props.history.goBack();
  }
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

          <div className="text-center">
            <button className="btn btn-default" onClick={goBack}>
              Go Back
            </button>
          </div>
        </div>
      }
    </div>
  )
};

export default withRouter(BreweryInfoDetails);
