import { connect } from 'react-redux';

import Description from './ui/Description';

const mapStateToProps = (state, props) => {
  const description = state.selectedBeer ? state.selectedBeer.description : "";
  return {
    description: description
  }
};

const ShowBeerDescription = connect(
  mapStateToProps,
  null
) (Description);

export default ShowBeerDescription;
