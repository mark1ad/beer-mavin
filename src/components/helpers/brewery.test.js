import Brewery from './brewery.js';
import beerData from '../../test_data/test_data.json';

it("valid id", () => {
  const newBrewery = new Brewery(beerData[0].breweries[0]);
  expect(newBrewery.id).toEqual("Jt43j7");
})

it("valid name", () => {
  const newBrewery = new Brewery(beerData[0].breweries[0]);
  expect(newBrewery.name).toEqual("New Belgium Brewing");
})

it("valid description", () => {
  const newBrewery = new Brewery(beerData[0].breweries[0]);
  expect(newBrewery.description).toEqual(beerData[0].breweries[0].description);
})

it("valid website", () => {
  const newBrewery = new Brewery(beerData[0].breweries[0]);
  expect(newBrewery.website).toEqual("http://www.newbelgium.com/");
})
