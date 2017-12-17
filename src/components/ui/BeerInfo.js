import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

const BeerInfo = ({beer, history, showBeerDetails, showBreweryDetails}) => {

  const submit = e => {
    e.preventDefault();
    showBeerDetails(beer);
    history.push('/beer_new/' + beer.id);
  }

  const selectBrewery = (e, brewery) => {
    e.preventDefault();
    showBreweryDetails(brewery);
    history.push('/brewery');
  }

  return (
    <div className="beer-info">
      <div>
        <span className="beer-info-name" onClick={submit}>{beer.name}</span> - {beer.style}
      </div>
      <div>
        <ul>
          {beer.breweries.map(brewery =>
            <li className="beer-info-brewery" key={brewery.id}>
              <span onClick={(e) => selectBrewery(e, brewery)}>{brewery.name}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

BeerInfo.propTypes = {
  beer: PropTypes.object.isRequired
}

export default withRouter(BeerInfo);
