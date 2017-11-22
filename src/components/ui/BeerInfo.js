import React from 'react';
import { PropTypes } from 'prop-types';

const BeerInfo = ({name, style, brewery}) =>
  <div className="beer-info">
    <div><span className="beer-info-name">{name}</span> - {style}</div>
    <div className="beer-info-brewery">{brewery}</div>
  </div>

BeerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string,
  brewery: PropTypes.string.isRequired
}

export default BeerInfo;
