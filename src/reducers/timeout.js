const INITIAL_STATE = {
  timeout: false,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
  case 'TIMEOUT':
    return {
      timeout: true,
    };
  case 'RESET':
    return {
      timeout: false,
    };
  default:
    return state;
  }
};
