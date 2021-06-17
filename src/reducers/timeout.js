const INITIAL_STATE = {
  time: 30,
  timeout: false,
  show: true,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
  case 'TIMEOUT':
    return {
      ...state,
      timeout: true,
    };
  case 'RESET':
    return {
      time: 30,
      timeout: false,
      show: true,
    };
  case 'DECREASE':
    return {
      ...state,
      time: state.time - 1,
    };
  case 'HIDE':
    return {
      ...state,
      show: false,
    };
  default:
    return state;
  }
};
