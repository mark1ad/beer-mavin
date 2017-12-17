import React, { Component } from 'react';

import NoBeerError from './NoBeerError';
import GoBackBtn from './GoBackBtn';
import ShowSelectedBeerName from '../ShowSelectedBeerName';
import ShowAbvIbu from '../ShowAbvIbu';
import ShowBeerDescription from '../ShowBeerDescription';
import ShowBreweries from '../ShowBreweries';


// TODO: This is very bad. Find a better way to  get access to store
import { store } from '../../index';

class BeerInfoDetails_new extends Component {
  constructor() {
    super();
    this.beerId = "";
  }

  // selectBrewery(e, brewery) {
  //   e.preventDefault();
  //   props.showBreweryDetails(brewery);
  //   props.history.push('/brewery');
  // }

  componentWillMount() {
    // console.log("BeerInfoDetails_new will mount");
    // console.log("id: ", this.props.match.params["id"]);
    // console.log(this);
    // store.dispatch(setSelectedBeer("zippy"));
    // console.log("store ", store.getState());

    // If the beer id in the uri is different than the selected beer in the
    // store update selected beer to match the uri
    this.beerId = this.props.match.params["id"];
    if (this.beerId !== store.getState().selectedBeer) {
      // TODO: Get beer from brewerydb.com
    }
  }

  componentWillUnmount() {
    // TODO: delete me
    // console.log("BeerInfoDetails_new will unmount");
  }

  componentWillReceiveProps(nextProps) {
    // TODO: delete me
    // console.log("BeerInfoDetails_new will receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // TODO: delete me
    // console.log("BeerInfoDetails_new should update?");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // TODO: delete me
    // console.log("BeerInfoDetails_new will update");
  }

  render () {
    return (
      <div className="beer-info-details">
        {(store.getState().selectedBeer === null) ?
          <NoBeerError /> :

          <div>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <ShowSelectedBeerName />

                <div>
                  {store.getState().selectedBeer.style}
                </div>

                <ShowAbvIbu />

                <ShowBreweries breweries={store.getState().selectedBeer.breweries} />

              </div>

              <div className="col-xs-12 col-sm-6">
                <ShowBeerDescription />
              </div>
            </div>

            <GoBackBtn />
          </div>
        }
      </div>
    )
  }
}

export default BeerInfoDetails_new;
