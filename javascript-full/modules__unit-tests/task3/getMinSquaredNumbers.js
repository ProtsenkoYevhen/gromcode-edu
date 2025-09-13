export default (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  const minAbs = numbers.reduce((acc, num) =>
    Math.abs(num) < Math.abs(acc) ? num : acc
  );

  return minAbs * minAbs;
};
