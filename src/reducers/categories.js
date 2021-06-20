const initialState = {
  categories: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'CATEGORIES':
    return {
      categories: payload,
    };
  default:
    return state;
  }
};
