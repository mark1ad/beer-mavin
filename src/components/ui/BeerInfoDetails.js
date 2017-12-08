import React from 'react';
import { withRouter } from 'react-router-dom';

import NoBeerError from './NoBeerError';

const BeerInfoDetails = (props) => {
  const goBack = e => {
    props.history.goBack();
  }

  const selectBrewery = (e, brewery) => {
    e.preventDefault();
    props.showBreweryDetails(brewery);
    props.history.push('/brewery');
  }

  return (
    <div className="beer-info-details">
      {(props.name === undefined) ?
        <NoBeerError /> :

        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h2 className="text-center">{props.name}</h2>
              <div>
                {props.style}
              </div>
              <div>
                {props.abv ? "ABV: " + props.abv : ""}
                {props.ibu ? " IBU: " + props.ibu : ""}
              </div>

              <div>
                  {props.breweries.map(brewery =>
                    <div onClick={(e) => selectBrewery(e, brewery)}
                        key={brewery.id}>
                      {brewery.name}
                    </div>
                  )}
              </div>

            </div>

            <div className="col-xs-12 col-sm-6 beer-info-description">
              {props.description}
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-default" onClick={goBack}>Go Back</button>
          </div>
        </div>
      }
    </div>
  )
}

export default withRouter(BeerInfoDetails);
