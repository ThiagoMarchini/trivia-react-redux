const initialState = {
  name: '',
  email: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'LOGIN':
    return {
      name: payload.name,
      email: payload.email,
    };
  default:
    return state;
  }
};
