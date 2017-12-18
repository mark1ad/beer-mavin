import { connect } from 'react-redux';

import BreweryList from './ui/BreweryList';

const mapStateToProps = (state, props) => {
  const breweries = props.breweries;
  return { breweries: breweries }
};

const ShowBreweries = connect (
  mapStateToProps,
  null
) (BreweryList);

export default ShowBreweries;
