// SearchResults
//
// Displays the list of beers from a SearchResults

import { connect } from 'react-redux';

import BeerList from './ui/BeerList';

const mapStateToProps = (state) => {
  const beers = state.beers === undefined ? []: state.beers;
  return { beers: beers }
}

const mapDispatchToProps = dispatch => {
  const onMount = () => {}

  return {
    onMount
  }
}

const SearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
) (BeerList)

export default SearchResults;
