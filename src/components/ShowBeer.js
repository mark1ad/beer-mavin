import { connect } from 'react-redux';

import BeerInfo from './ui/BeerInfo';

const mapStateToProps = (state) => {
  return {
    name: state.beers[1].name,
    brewery: state.beers[1].brewery
  }
}

const ShowBeer = connect(
  mapStateToProps,
  {}
) (BeerInfo)

export default ShowBeer;
