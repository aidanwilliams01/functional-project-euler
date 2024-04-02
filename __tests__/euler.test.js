import { multiples } from "../src/euler";

describe('multiples', () => {

  test('should return a number', () => {
    expect(typeof multiples()).toEqual('number');
  });
})