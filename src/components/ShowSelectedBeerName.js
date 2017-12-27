import { connect } from 'react-redux';

import NameField from './ui/NameField';

const mapStateToProps = (state, props) => {
  const name = state.selectedBeer ? state.selectedBeer.name : "";
  return {
    name: name
  }
};

const ShowSelectedBeerName = connect(
  mapStateToProps,
  null
) (NameField);

export default ShowSelectedBeerName;
