import getMinSquare from './getMinSquaredNumbers';

it('should get min square number', () => {
  const result = getMinSquare([]);
  expect(result).toEqual(null);
});

it('should get min square number', () => {
  const result = getMinSquare('22');
  expect(result).toEqual(null);
});

it('should get min square number', () => {
  const result = getMinSquare([5, -2, 3, 4]);
  expect(result).toEqual(4);
});
