const initialState = {
  key: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'TOKEN':
    return { key: payload.key };

  default:
    return state;
  }
};
