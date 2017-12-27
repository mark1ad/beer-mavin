// ShowBeerList
//
// Displays the list of beers

import { connect } from 'react-redux';

import BeerList from './ui/BeerList';
import {
  setBeers,
  setBeerSearchTerm
} from './actions';

const mapStateToProps = (state, props) => {
  const uri_beer_name = props.match.params['name'];

  if (state.searchTerms.beer_name !== uri_beer_name) {
    // uri beer name doesn't match store's search terms. Use name from uri
    global.store.dispatch(setBeerSearchTerm(uri_beer_name));

    global.axiosInstance.get("beers/search?name=" + uri_beer_name)
      .then(res => {
        const beers = res.data.data;
        global.store.dispatch(setBeers(beers))
      })
      .catch((response) => {
        // TODO: Handle failure
        console.log("ShowBeerList get beers fail ", response);
      })
  }

  return { beers: state.beers }
}

const ShowBeerList = connect(
  mapStateToProps,
  null
) (BeerList)

export default ShowBeerList;
