import getAPIToken from '../services';

const action = (state) => ({
  type: state.type,
  payload: state.payload,
});

export default action;

export const fetchToken = () => async (dispatch) => {
  const resultAPI = await getAPIToken();
  const { token } = resultAPI;
  if (resultAPI.response_code === 0) {
    console.log(token);
    localStorage.setItem('token', token);
    return dispatch(action({ type: 'TOKEN', payload: token }));
  }
};
