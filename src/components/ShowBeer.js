import { connect } from 'react-redux';

import BeerInfo from './ui/BeerInfo';
import { setSelectedBeer, setSelectedBrewery } from './actions';

const mapStateToProps = (state, props) => {
  const foundBeer = state.beers.find((beer) => {
    return props.beer_id === beer.id;
  })
  return {
    beer_id: props.beer_id,
    name: foundBeer.name,
    style: foundBeer.style,
    breweries: foundBeer.breweries
  }
}

const mapDispatchToProps = dispatch => {
  let showBeerDetails = (beer_id) => {
    dispatch(setSelectedBeer(beer_id));
  }

  let showBreweryDetails = (brewery_id) => {
    dispatch(setSelectedBrewery(brewery_id));
  }

  return {
    showBeerDetails: showBeerDetails,
    showBreweryDetails: showBreweryDetails
  }
}

const ShowBeer = connect(
  mapStateToProps,
  mapDispatchToProps
) (BeerInfo)

export default ShowBeer;
