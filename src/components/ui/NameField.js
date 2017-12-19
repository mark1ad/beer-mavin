import React from 'react';
import { PropTypes } from 'prop-types';

const NameField = (props) => {
  return (
    <h2 className="text-center">{props.name}</h2>
  )
};

NameField.propTypes = {
  name: PropTypes.string.isRequired
}

export default NameField;
