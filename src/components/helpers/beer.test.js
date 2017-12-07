import Beer from './beer';
import beerData from '../../test_data/test_data.json';

it("new Beer", () => {
  // const beer = beerData[0];
  const newBeer = new Beer(beerData[0]);
  expect(newBeer).toBeDefined();
})

it("valid id", () => {
  const newBeer = new Beer(beerData[0]);
  expect(newBeer.id).toEqual("tuqTtX");
})

it("valid name", () => {
  const newBeer = new Beer(beerData[0]);
  expect(newBeer.name).toEqual("Fat Tire");
})

it("valid style", () => {
  const newBeer = new Beer(beerData[0]);
  expect(newBeer.style).toEqual("American-Style Amber/Red Ale");
})

it("valid breweries", () => {
  const newBeer = new Beer(beerData[0]);
  expect(newBeer.breweries.length).toEqual(1);
})

it("valid abv", () => {
  const newBeer = new Beer(beerData[0]);
  expect(newBeer.abv).toEqual("5.2");
})

it("valid ibu", () => {
  const newBeer = new Beer(beerData[0]);
  expect(newBeer.ibu).toEqual("18.5");
})

it("valid description", () => {
  const newBeer = new Beer(beerData[0]);
  expect(newBeer.description).toEqual(beerData[0].description);
})

it("beer doesn't have style", () => {
  const newBeer = new Beer({breweries: []});
  expect(newBeer).toBeDefined();
})

it("beer doesn't have breweries", () => {
  const newBeer = new Beer({style:{}});
  expect(newBeer).toBeDefined();
})
