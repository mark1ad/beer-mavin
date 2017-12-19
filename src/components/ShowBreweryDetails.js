import { connect } from 'react-redux';

import BreweryInfoDetails from './ui/BreweryInfoDetails';
import { setSelectedBrewery } from './actions';
import Brewery from './helpers/brewery';

const mapStateToProps = (state, props) => {
  const uri_brewery_id = props.match.params['id'];

  if (state.selectedBrewery === null ||
      state.selectedBrewery.id !== uri_brewery_id) {
    // Uri's brewery id doesn't match state's selected brewery. Use brewery
    // from uri
    global.axiosInstance.get("breweries/by_id?id=" + uri_brewery_id)
      .then( res => {
        // TODO: Is there a better way than using a global to get to the
        // store.dispatch
        global.store.dispatch(setSelectedBrewery(new Brewery(res.data.data)))
      })
      .catch((response) => {
        // TODO: Handle failure
        console.log("ShowBreweryDetails get brewery failed", response);
      })
  }

  return { brewery: state.selectedBrewery };
};

const ShowBreweryDetails = connect(
  mapStateToProps,
  null
) (BreweryInfoDetails);

export default ShowBreweryDetails;
