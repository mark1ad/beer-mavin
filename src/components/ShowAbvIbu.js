import { connect } from 'react-redux';

import AbvIbuField from './ui/AbvIbuField';

const mapStateToProps = (state, props) => {
  return {
    abv: state.selectedBeer.abv,
    ibu: state.selectedBeer.ibu
  }
};

const ShowAbvIbu = connect(
  mapStateToProps,
  null
) (AbvIbuField);

export default ShowAbvIbu;
