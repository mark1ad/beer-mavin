import { connect } from 'react-redux';

import Description from './ui/Description';

const mapStateToProps = (state, props) => {
  const description = state.selectedBrewery ? state.selectedBrewery.description : "";
  return {
    description: description
  }
};

const ShowBreweryDescription = connect(
  mapStateToProps,
  null
) (Description);

export default ShowBreweryDescription;
