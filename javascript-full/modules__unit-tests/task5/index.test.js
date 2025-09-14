import { reverseArray, withdraw, getAdults } from './index';

//test for reverseArray

it('should return reversed array', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it('should return empty array if input is empty', () => {
  const result = reverseArray([]);
  expect(result).toEqual([]);
});

it('should return null if input is not an array', () => {
  const result = reverseArray('not array');
  expect(result).toEqual(null);
});

//test for withdraw

it('should withdraw money if enough balance', () => {
  const clients = ['Ann', 'John'];
  const balances = [100, 50];
  const result = withdraw(clients, balances, 'Ann', 40);
  expect(result).toEqual(60);
});

it('should return -1 if not enough balance', () => {
  const clients = ['Ann', 'John'];
  const balances = [100, 50];
  const result = withdraw(clients, balances, 'John', 100);
  expect(result).toEqual(-1);
});

it('should update balances array after withdrawal', () => {
  const clients = ['Ann', 'John'];
  const balances = [100, 50];
  withdraw(clients, balances, 'Ann', 70);
  expect(balances).toEqual([30, 50]);
});

//test for getAdults

it('should return only adults >= 18', () => {
  const people = { Ann: 17, John: 20, Tom: 18 };
  const result = getAdults(people);
  expect(result).toEqual({ John: 20, Tom: 18 });
});

it('should return empty object if no adults', () => {
  const people = { Ann: 10, Bob: 12 };
  const result = getAdults(people);
  expect(result).toEqual({});
});

it('should return all if all are adults', () => {
  const people = { John: 30, Ann: 25 };
  const result = getAdults(people);
  expect(result).toEqual({ John: 30, Ann: 25 });
});
