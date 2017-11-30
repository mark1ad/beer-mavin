import { connect } from 'react-redux';

import BeerInfoDetails from './ui/BeerInfoDetails';

const mapStateToProps = (state) => {
  const foundBeer = state.beers.find((beer) => {
    return state.selectedBeer === beer.id;
  })
  let data = foundBeer ? { name: foundBeer.name} : {}
  return data;
}

const ShowBeerDetails = connect(
  mapStateToProps,
  {}
) (BeerInfoDetails);

export default ShowBeerDetails;
