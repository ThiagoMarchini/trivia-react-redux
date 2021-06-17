const initialState = {
  questions: [],
  score: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'QUIZ':
    return { questions: payload };
  case 'SCORE':
    return {
      ...state,
      score: state.score + payload,
    };
  default:
    return state;
  }
};
