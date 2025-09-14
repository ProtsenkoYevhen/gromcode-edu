import { calc } from './calculator';

it('get sum numbers', () => {
  const result = calc('2 + 3');
  expect(result).toEqual('2 + 3 = 5');
});

it('get the difference of numbers', () => {
  const result = calc('5 - 3');
  expect(result).toEqual('5 - 3 = 2');
});

it('get multiplication of numbers', () => {
  const result = calc('5 * 3');
  expect(result).toEqual('5 * 3 = 15');
});

it('get division of numbers', () => {
  const result = calc('9 / 3');
  expect(result).toEqual('9 / 3 = 3');
});

it('get null if not a string', () => {
  const result = calc(2 * 2);
  expect(result).toEqual(null);
});
