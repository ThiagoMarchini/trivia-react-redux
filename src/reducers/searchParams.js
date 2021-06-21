const initialState = {
  category: null,
  difficulty: null,
  type: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'PARAMETERS':
    return {
      category: payload.category,
      difficulty: payload.difficulty,
      type: payload.type,
    };
  default:
    return state;
  }
};
