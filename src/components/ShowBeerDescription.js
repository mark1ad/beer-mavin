import { connect } from 'react-redux';

import Description from './ui/Description';

const mapStateToProps = (state, props) => {
  console.log("ShowBeerDescription ", props);
  return {
    description: state.selectedBeer.description
  }
};

const ShowBeerDescription = connect(
  mapStateToProps,
  null
) (Description);

export default ShowBeerDescription;
