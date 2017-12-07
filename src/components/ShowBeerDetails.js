import { connect } from 'react-redux';

import BeerInfoDetails from './ui/BeerInfoDetails';

const mapStateToProps = (state) => {
  const foundBeer = state.beers.find((beer) => {
    return state.selectedBeer === beer.id;
  })
  let data = foundBeer
    ? {
      name: foundBeer.name,
      style: foundBeer.style,
      breweries: foundBeer.breweries,
      abv: foundBeer.abv,
      ibu: foundBeer.ibu,
      description: foundBeer.description
    }
    : {};
  return data;
}

const ShowBeerDetails = connect(
  mapStateToProps,
  {}
) (BeerInfoDetails);

export default ShowBeerDetails;
