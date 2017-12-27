import { connect } from 'react-redux';

import NameField from './ui/NameField';

const mapStateToProps = (state, props) => {
  const name = state.selectedBrewery ? state.selectedBrewery.name : "";
  return {
    name: name
  }
};

const ShowSelectedBreweryName = connect(
  mapStateToProps,
  null
) (NameField);

export default ShowSelectedBreweryName;
