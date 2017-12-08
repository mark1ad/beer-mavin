class Brewery {
  // constructor expects brewery object to be in format from brewerydb.com
  constructor(brewery) {
    this.id = brewery.id;
    this.name = brewery.name;
    this.website = brewery.website;
    this.description = brewery.description;
  }
}

export default Brewery;
