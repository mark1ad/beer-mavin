import React from 'react';
import { PropTypes } from 'prop-types';

const BeerInfo = ({name, style, breweries}) =>
  <div className="beer-info">
    <div><span className="beer-info-name">{name}</span> - {style}</div>
    <div>
      <ul>
        {breweries.map(brewery =>
          <li className="beer-info-brewery" key={brewery.id}>{brewery.name}</li>
        )}
      </ul>
    </div>
  </div>

BeerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string,
  breweries: PropTypes.array.isRequired
}

export default BeerInfo;
