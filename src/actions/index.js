import getAPIToken from '../services';
// import getAPIQuiz from '../services/APIQuiz';

const action = (state) => ({
  type: state.type,
  payload: state.payload,
});

export default action;

export const fetchToken = () => async (dispatch) => {
  const resultAPI = await getAPIToken();
  const { token } = resultAPI;
  if (resultAPI.response_code === 0) {
    localStorage.setItem('token', token);
    return dispatch(action({ type: 'TOKEN', payload: token }));
  }
};

// export const fetchQuiz = () => async () => {
//   const resultAPI = await getAPIQuiz();
//   console.log(resultAPI);
//   return resultAPI;
// };
