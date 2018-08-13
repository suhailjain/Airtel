export default (state = '', action) => {
  switch (action.type) {
    case 'pizza_s':
      return action.payload;
    default:
      return state;
  }
};
