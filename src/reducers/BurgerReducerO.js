export default (state = '', action) => {
  switch (action.type) {
    case 'burger_so':
      return action.payload;
    default:
      return state;
  }
};
