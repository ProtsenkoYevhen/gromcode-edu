import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('square numbers in array', () => {
  const result = getSquaredArray([1, 2]);
  expect(result).toEqual([1, 4]);
});

it('should get only odd numbers', () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).toEqual([1, 3]);
});

it('should get sum numbers', () => {
  const result = getSum(1, 2);
  expect(result).toEqual(3);
});
