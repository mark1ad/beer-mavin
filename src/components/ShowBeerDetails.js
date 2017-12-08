import { connect } from 'react-redux';

import BeerInfoDetails from './ui/BeerInfoDetails';
import { setSelectedBrewery } from './actions';

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

const mapDispatchToProps = dispatch => {
  let showBreweryDetails = (brewery) => {
    dispatch(setSelectedBrewery(brewery));
  }

  return {
    showBreweryDetails: showBreweryDetails
  }
}

const ShowBeerDetails = connect(
  mapStateToProps,
  mapDispatchToProps
) (BeerInfoDetails);

export default ShowBeerDetails;
