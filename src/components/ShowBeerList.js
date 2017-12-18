// ShowBeerList
//
// Displays the list of beers

import { connect } from 'react-redux';

import BeerList from './ui/BeerList';

const mapStateToProps = (state) => {
  const beers = state.beers === undefined ? []: state.beers;
  return { beers: beers }
}

const ShowBeerList = connect(
  mapStateToProps,
  null
) (BeerList)

export default ShowBeerList;
