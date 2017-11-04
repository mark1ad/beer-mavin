// Beers
//
// Displays the beer list from the store. Container for BeerList

import { connect } from 'react-redux';

import { addBeers, clearBeers } from './actions';
import BeerList from './ui/BeerList';

const mapStateToProps = (state) =>
  ({
    beers: state.beers
  })

const mapDispatchToProps = dispatch => {
  // Clear beer list in store then get beers from server
  const onMount = () => {
    dispatch(clearBeers());
    global.axiosInstance.get("beers")
      .then( res => {
        dispatch(addBeers(res.data))
      })
      .catch( error => {
        console.log("ERROR ", error);
      })
  }

  return {
    onMount
  }
}

const Beers = connect(
  mapStateToProps,
  mapDispatchToProps
) (BeerList)

export default Beers;
