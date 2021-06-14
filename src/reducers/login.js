const initialState = {
  name: '',
  email: '',
};

export default (state = initialState, { type }) => {
  switch (type) {
  case 'LOGIN':
    // return { ...state, ...payload }
    return state;
  default:
    return state;
  }
};
