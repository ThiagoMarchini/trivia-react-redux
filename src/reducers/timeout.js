const INITIAL_STATE = {
  time: 30,
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
      time: 30,
      timeout: false,
    };
  default:
    return state;
  }
};
