import { connect } from 'react-redux';

import NameField from './ui/NameField';

const mapStateToProps = (state, props) => {
  return {
    name: state.selectedBeer.name
    // name: "Beer!"
  }
};

const ShowSelectedBeerName = connect(
  mapStateToProps,
  null
) (NameField);

export default ShowSelectedBeerName;
