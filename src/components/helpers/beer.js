class Beer {
  // constructor expects beer object to be in format from brewerydb.com
  constructor(beer) {
    this.id = beer.id;
    this.name = beer.name;
    this.style = beer.style.name;
    this.brewery = beer.breweries[0].name;
  }
}

export default Beer;
