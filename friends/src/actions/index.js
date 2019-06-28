import axios from 'axios';

export const LOGIN_PENDING = `LOGGING_IN`;
export const LOGIN_SUCCESS = `LOGIN_SUCCESS`;
export const LOGIN_FAILURE = `LOGIN_FAILURE`;

export const login = (loginInfo) => (dispatch) => {
  const request = axios.post(`http://localhost:5000/api/login`, loginInfo);
  request
    .then((response) => {
      console.log('SUCCESS: ', response.data.payload);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: response.data.payload,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: `${error}`,
      });
    });
};
