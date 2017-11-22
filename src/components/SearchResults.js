// SearchResults
//
// Displays the list of beers from a SearchResults

import { connect } from 'react-redux';

import BeerList from './ui/BeerList';

const mapStateToProps = (state) => {
  const beers = state.beers === undefined ? []: state.beers;
  return { beers: beers }
}

const SearchResults = connect(
  mapStateToProps,
  null
) (BeerList)

export default SearchResults;
