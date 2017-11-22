import React from 'react';

const BeerInfo = ({name, brewery}) =>
  <div className="row">
    <div className="col-sm-6">{name}</div>
    <div className="col-sm-6">{brewery}</div>
  </div>

export default BeerInfo;
