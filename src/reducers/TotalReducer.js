export default (state = '', action) => {
  switch (action.type) {
    case 'total':
      return action.payload;
    default:
      return state;
  }
};
