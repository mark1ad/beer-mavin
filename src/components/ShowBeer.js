import { connect } from 'react-redux';

import BeerInfo from './ui/BeerInfo';
import { setSelectedBeer } from './actions';

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
  let showDetails = (beer_id) => {
    dispatch(setSelectedBeer(beer_id));
  }
  return {
    showDetails: showDetails
  }
}

const ShowBeer = connect(
  mapStateToProps,
  mapDispatchToProps
) (BeerInfo)

export default ShowBeer;
