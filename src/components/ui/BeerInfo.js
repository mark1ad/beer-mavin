import React from 'react';

const BeerInfo = ({name, brewery}) =>
  <div className="beer-info">
    <div>{name}</div>
    <div className="beer-info-brewery">{brewery}</div>
  </div>

export default BeerInfo;
