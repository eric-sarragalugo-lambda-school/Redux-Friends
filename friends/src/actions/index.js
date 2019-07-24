import axios from 'axios';
import auth from '../authentications/auth';

export const LOGIN_START = 'LOGGING_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCH_ALL_PENDING = 'FETCH_ALL_PENDING';
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS';
export const FETCH_ALL_FAILURE = 'FETCH_ALL_FAILURE';
export const ADD_PENDING = 'ADD_PENDING';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const login = (loginInfo) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  const request = axios.post(`http://localhost:5000/api/login`, loginInfo);
  request
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.payload,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: `${error}`,
      });
    });
};

export const fetchFriends = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_PENDING });
  const request = auth().get(`http://localhost:5000/api/friends`);
  request
    .then((response) => {
      dispatch({
        type: FETCH_ALL_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ALL_FAILURE,
        payload: `${error}`,
      });
    });
};

export const addFriend = (friend) => (dispatch) => {
  dispatch({ type: ADD_PENDING });
  const request = auth().post(`http://localhost:5000/api/friends`, friend);
  request
    .then((response) => {
      dispatch({
        type: ADD_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_FAILURE,
        payload: `${error}`,
      });
    });
};
