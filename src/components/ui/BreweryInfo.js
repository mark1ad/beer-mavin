import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

const BreweryInfo = ({brewery, showBreweryDetails, history}) => {

  const selectBrewery = (e, brewery) => {
    e.preventDefault();
    showBreweryDetails(brewery);
    history.push('/brewery');
  }

  return (
    <div onClick={(e) => selectBrewery(e, brewery)}>
      {brewery.name}
    </div>
  )
};

BreweryInfo.propTypes = {
  name: PropTypes.string
};

export default withRouter(BreweryInfo);
