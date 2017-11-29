import Brewery from './brewery.js';
import beerData from '../../test_data/test_data.json';

it("new brewery", () => {
  const newBrewery = new Brewery(beerData[0].breweries[0]);
  expect(newBrewery).toBeDefined();
  expect(newBrewery).toEqual({
    "id": "Jt43j7",
    "name": "New Belgium Brewing"
  })
})

it("valid id", () => {
  const newBrewery = new Brewery(beerData[0].breweries[0]);
  expect(newBrewery.id).toEqual("Jt43j7");
})

it("valid name", () => {
  const newBrewery = new Brewery(beerData[0].breweries[0]);
  expect(newBrewery.name).toEqual("New Belgium Brewing");
})
