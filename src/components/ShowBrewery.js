import { connect } from 'react-redux';

import BreweryInfo from './ui/BreweryInfo';
import { setSelectedBrewery } from './actions';

const mapStateToProps = (state, props) => {
  return {
    brewery: props.brewery
  }
};

const mapDispatchToProps = dispatch => {
  let showBreweryDetails = (brewery) => {
    dispatch(setSelectedBrewery(brewery));
  }
  return {
    showBreweryDetails: showBreweryDetails
  }
};

const ShowBrewery = connect (
  mapStateToProps,
  mapDispatchToProps
) (BreweryInfo)

export default ShowBrewery;
