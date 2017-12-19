import Brewery from './brewery.js';

class Beer {
  // constructor expects beer object to be in format from brewerydb.com
  constructor(beer) {
    this.id = beer.id;
    this.name = beer.name;
    if (beer.style) {
      this.style = beer.style.name;
    }

    this.abv = beer.abv;
    this.ibu = beer.ibu;
    this.description = beer.description;
    if (beer.breweries) {
      this.breweries = beer.breweries.map(brewery => new Brewery(brewery));
    }
  }
}

export default Beer;
