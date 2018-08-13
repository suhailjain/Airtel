export default (state = '', action) => {
  switch (action.type) {
    case 'pizza_so':
      return action.payload;
    default:
      return state;
  }
};
