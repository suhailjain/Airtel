export default (state = '', action) => {
  switch (action.type) {
    case 'pasta_s':
      return action.payload;
    default:
      return state;
  }
};
