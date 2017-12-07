import { connect } from 'react-redux';

import BreweryInfoDetails from './ui/BreweryInfoDetails';

const mapStateToProps = (state) => {
  return {};
};

const ShowBreweryDetails = connect(
  mapStateToProps,
  {}
) (BreweryInfoDetails);

export default ShowBreweryDetails;
