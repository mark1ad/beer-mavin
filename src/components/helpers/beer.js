import Brewery from './brewery.js';

class Beer {
  // constructor expects beer object to be in format from brewerydb.com
  constructor(beer) {
    this.id = beer.id;
    this.name = beer.name;
    this.style = beer.style.name;
    this.breweries = beer.breweries.map(brewery => new Brewery(brewery));
  }
}

export default Beer;
