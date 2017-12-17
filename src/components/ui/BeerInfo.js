import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import ShowBreweries from '../ShowBreweries';

const BeerInfo = ({beer, history, showBeerDetails, showBreweryDetails}) => {

  const submit = e => {
    e.preventDefault();
    showBeerDetails(beer);
    history.push('/beer_new/' + beer.id);
  }

  return (
    <div className="beer-info">
      <div>
        <span className="beer-info-name" onClick={submit}>{beer.name}</span> - {beer.style}
      </div>

      <ShowBreweries breweries={beer.breweries} />
    </div>
  )
}

BeerInfo.propTypes = {
  beer: PropTypes.object.isRequired
}

export default withRouter(BeerInfo);
