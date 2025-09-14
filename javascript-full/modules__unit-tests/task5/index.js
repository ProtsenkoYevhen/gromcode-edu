export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (balances[index] < amount) {
    return -1;
  }
  balances[index] -= amount;
  return balances[index];
};

export const getAdults = (obj) => {
  const result = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }
  return result;
};
