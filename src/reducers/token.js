const initialState = {
  key: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'TOKEN':
    return { key: payload };
  default:
    return state;
  }
};
