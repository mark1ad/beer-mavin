import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

const BeerInfo = ({beer_id, name, style, breweries, history, showBeerDetails, showBreweryDetails}) => {

  const submit = e => {
    e.preventDefault();
    showBeerDetails(beer_id);
    history.push('/beer');
  }

  const selectBrewery = (e, id) => {
    e.preventDefault();
    showBreweryDetails(id);
    history.push('/brewery');
  }

  return (
    <div className="beer-info">
      <div>
        <span className="beer-info-name" onClick={submit}>{name}</span> - {style}
      </div>
      <div>
        <ul>
          {breweries.map(brewery =>
            <li className="beer-info-brewery" key={brewery.id}>
              <span onClick={(e) => selectBrewery(e, brewery.id)}>{brewery.name}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

BeerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string,
  breweries: PropTypes.array.isRequired
}

export default withRouter(BeerInfo);
