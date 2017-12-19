import { connect } from 'react-redux';

import SearchForm from './ui/SearchForm';
import {
  setBeers,
  clearBeers,
  setBeerSearchTerm
} from './actions';

const mapDispatchToProps = dispatch => {
  let onSubmit = (beerName) => {
    dispatch(clearBeers());
    dispatch(setBeerSearchTerm(beerName));

    global.axiosInstance.get("beers/search?name=" + beerName)
      .then(res => {
        const beers = res.data.data;
        dispatch(setBeers(beers))
      })
      .catch((response) => {
        // TODO: Handle failure
        console.log("onSubmit fail ", response);
      })
  }
  return {
    onSubmit: onSubmit
  }
}

const FindBeer = connect(
  null,
  mapDispatchToProps
) (SearchForm)

export default FindBeer;
