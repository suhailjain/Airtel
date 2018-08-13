export default (state = '', action) => {
  switch (action.type) {
    case 'burger_s':
      return action.payload;
    default:
      return state;
  }
};
