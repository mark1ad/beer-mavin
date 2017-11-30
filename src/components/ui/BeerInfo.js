import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

const BeerInfo = ({name, style, breweries, history}) => {

  const submit = e => {
    e.preventDefault();
    console.log("submitted");
    history.push('/beer');
  }

  return (
    <div className="beer-info">
      <div>
        <span className="beer-info-name" onClick={submit}>{name}</span> - {style}
      </div>
      <div>
        <ul>
          {breweries.map(brewery =>
            <li className="beer-info-brewery" key={brewery.id}>{brewery.name}</li>
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
