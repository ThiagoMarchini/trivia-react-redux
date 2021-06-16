import getAPIToken from '../services';
import getAPIQuiz from '../services/APIQuiz';

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

function actionQuiz(info) {
  return {
    type: 'QUIZ',
    payload: info,
  };
}

export function fetchQUIZ(token) {
  return (dispatch) => getAPIQuiz(token)
    .then((response) => dispatch(actionQuiz(response)));
}
