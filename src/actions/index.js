import getAPIToken from '../services';
import getAPIQuiz from '../services/APIQuiz';
import getCategories from '../services/Categories';

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

export const fetchAPICategories = () => async (dispatch) => {
  const resultAPI = await getCategories();
  const categories = resultAPI.trivia_categories.map((entry) => entry);
  console.log(categories);
  localStorage.setItem('CATEGORIES', categories);
  return dispatch(action({ type: 'CATEGORIES', payload: categories }));
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
