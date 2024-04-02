import { coinCounter } from "../src/coin-counter";

describe('coinCounter', () => {

  test('should return a string', () => {
    expect(typeof coinCounter(4.75)).toEqual('string');
  });
})