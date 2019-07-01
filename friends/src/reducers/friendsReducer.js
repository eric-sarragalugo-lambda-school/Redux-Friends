import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_ALL_PENDING,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
  ADD_PENDING,
  ADD_SUCCESS,
  ADD_FAILURE,
} from '../actions';

const initialState = {
  error: '',
  failedLogin: false,
  fetchingFriends: false,
  friends: [],
  loginMessage: '',
  pendingLogin: false,
  successfulLogin: false,
  pendingAdd: false,
  successfulAdd: false,
};

export function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        pendingLogin: true,
        failedLogin: false,
        successfulLogin: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginMessage: 'Login Successful',
        pendingLogin: false,
        failedLogin: false,
        successfulLogin: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginMessage: action.payload,
        pendingLogin: false,
        failedLogin: true,
        successfulLogin: false,
      };
    case FETCH_ALL_PENDING:
      return {
        ...state,
        fetchingFriends: true,
      };
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload.data,
      };
    case FETCH_ALL_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload,
      };
    case ADD_PENDING:
      return {
        ...state,
        pendingAdd: true,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        pendingAdd: false,
        friends: action.payload.data,
      };
    case ADD_FAILURE:
      return {
        ...state,
        pendingAdd: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
