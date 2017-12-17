import { connect } from 'react-redux';

import AbvIbuField from './ui/AbvIbuField';

const mapStateToProps = (state, props) => {
  const abv = state.selectedBeer ? state.selectedBeer.abv : null;
  const ibu = state.selectedBeer ? state.selectedBeer.ibu : null;
  return {
    abv: abv,
    ibu: ibu
  }
};

const ShowAbvIbu = connect(
  mapStateToProps,
  null
) (AbvIbuField);

export default ShowAbvIbu;
