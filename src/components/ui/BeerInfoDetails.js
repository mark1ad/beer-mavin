import React from 'react';

import NoBeerError from './NoBeerError';
import GoBackBtn from './GoBackBtn';
import ShowSelectedBeerName from '../ShowSelectedBeerName';
import ShowAbvIbu from '../ShowAbvIbu';
import ShowBeerDescription from '../ShowBeerDescription';
import ShowBreweries from '../ShowBreweries';

const BeerInfoDetails = (props) => {

  return (
    <div className="beer-info-details">
      {(props.beer === null) ?
        <NoBeerError /> :

        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <ShowSelectedBeerName />

              <div>
                {props.style}
              </div>

              <ShowAbvIbu />

              <ShowBreweries breweries={props.beer.breweries} />
            </div>

            <div className="col-xs-12 col-sm-6">
              <ShowBeerDescription />
            </div>
          </div>

          <GoBackBtn />
        </div>
      }
    </div>
  )
}

export default BeerInfoDetails;
