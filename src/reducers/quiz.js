const initialState = {
  questions: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'QUIZ':
    return { questions: payload };

  default:
    return state;
  }
};
