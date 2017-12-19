import React from 'react';
import { PropTypes } from 'prop-types';

const AbvIbuField = (props) => {
  return (
    <div>
      {props.abv ? "ABV: " + props.abv : ""}
      {props.ibu ? " IBU: " + props.ibu : ""}
    </div>
  )
};

AbvIbuField.propTypes = {
  abv: PropTypes.string,
  ibu: PropTypes.string
};

export default AbvIbuField;
