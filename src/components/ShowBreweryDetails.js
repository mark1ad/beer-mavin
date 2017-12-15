import { connect } from 'react-redux';

import BreweryInfoDetails from './ui/BreweryInfoDetails';

const mapStateToProps = (state) => {
  const data = state.selectedBrewery
    ? {
      name: state.selectedBrewery.name,
      description: state.selectedBrewery.description,
      website: state.selectedBrewery.website
    }
    : {};
  return data;
};

const ShowBreweryDetails = connect(
  mapStateToProps,
  {}
) (BreweryInfoDetails);

export default ShowBreweryDetails;
