import React from 'react';
import { PropTypes } from 'prop-types';

const Description = (props) => {
  return (
    <div className="description">
      {props.description}
    </div>
  )
};

Description.propTypes = {
  description: PropTypes.string
};

export default Description;
