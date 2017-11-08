import { connect } from 'react-redux';

import SearchForm from './ui/SearchForm';

const mapDispatchToProps = dispatch => {
  let onSubmit = (beerName) => {
    console.log("FindBeer onSubmit ", beerName);
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
