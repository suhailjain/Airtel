export const burgerList = (burger) => {
  return {
    type: 'burger_s',
    payload: burger
  };
};

export const pizzaList = (pizza) => {
  return {
    type: 'pizza_s',
    payload: pizza
  };
};

export const pastaList = (pasta) => {
  return {
    type: 'pasta_s',
    payload: pasta
  };
};

export const burgerListO = (burger) => {
  return {
    type: 'burger_so',
    payload: burger
  };
};

export const pizzaListO = (pizza) => {
  return {
    type: 'pizza_so',
    payload: pizza
  };
};

export const pastaListO = (pasta) => {
  return {
    type: 'pasta_so',
    payload: pasta
  };
};

export const itemsBought = (item) => {
  return {
    type: 'item',
    payload: item
  };
};

export const total = (total) => {
  return {
    type: 'total',
    payload: total
  };
};
