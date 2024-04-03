import { multiples, fibonacci } from "../src/euler";

describe('multiples', () => {

  test('should return a number', () => {
    expect(typeof multiples()).toEqual('number');
  });

  test('should return the sum of the multiples of 3 or 5 below a given argument', () => {
    expect(multiples(1000)).toEqual(233168);
  });
})

describe('fibonacci', () => {

  test('should return a number', () => {
    expect(typeof fibonacci()).toEqual('number');
  });
});