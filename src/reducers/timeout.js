const INITIAL_STATE = {
  timeout: false,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
  case 'TIMEOUT':
    return {
      timeout: true,
    };
  default:
    return state;
  }
};
