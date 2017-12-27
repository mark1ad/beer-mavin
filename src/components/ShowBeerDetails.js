import { connect } from 'react-redux';

import BeerInfoDetails from './ui/BeerInfoDetails';
import { setSelectedBeer } from './actions';
import Beer from './helpers/beer';

const mapStateToProps = (state, props) => {
  const uri_beer_id = props.match.params['id'];
  if (state.selectedBeer === null ||
      state.selectedBeer.id !== uri_beer_id) {
    // Uri's beer id doesn't match store's selected beer. Use id from uri
    global.axiosInstance.get("beers/by_id?id=" + props.match.params['id'])
      .then( res => {
        // TODO: Is there a better way than using a global to get to the
        // store.dispatch
        global.store.dispatch(setSelectedBeer(new Beer(res.data.data)))
      })
      .catch((response) => {
        // TODO: handle failure
        console.log("ShowBeerDetails get beer failed", response);
      })
  }

  return { beer: state.selectedBeer};
}

const ShowBeerDetails = connect(
  mapStateToProps,
  null
) (BeerInfoDetails);

export default ShowBeerDetails;
