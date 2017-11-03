import { connect } from 'react-redux';

import BeerList from './ui/BeerList';

const mapStateToProps = (state) =>
  ({
    beers: state.beers
  })

const Beers = connect(
  mapStateToProps,
  {}
) (BeerList)

export default Beers;
