const INITIAL_STATE = {
  time: 30,
  timeout: false,
  show: true,
  score: 0,
  assertions: 0,
};

const standardPoints = 10;

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case 'TIMEOUT':
    return {
      ...state,
      timeout: true,
    };
  case 'RESET':
    return {
      ...state,
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
  case 'SCORE':
    return {
      ...state,
      assertions: state.assertions + 1,
      score: state.score + (standardPoints + (state.time * payload)),
    };
  case 'RESET_SCORE':
    return INITIAL_STATE;
  default:
    return state;
  }
};
