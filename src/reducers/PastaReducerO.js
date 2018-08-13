export default (state = '', action) => {
  switch (action.type) {
    case 'pasta_so':
      return action.payload;
    default:
      return state;
  }
};
