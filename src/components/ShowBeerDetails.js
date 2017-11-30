import { connect } from 'react-redux';

import BeerInfoDetails from './ui/BeerInfoDetails';

const mapStateToProps = (state) => {
  return {}
}

const ShowBeerDetails = connect(
  mapStateToProps,
  {}
) (BeerInfoDetails);

export default ShowBeerDetails;
