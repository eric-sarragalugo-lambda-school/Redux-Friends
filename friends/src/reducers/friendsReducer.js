import { LOGIN_PENDING } from '../actions';

const initialState = {
  friends: [],
  pendingLogin: false,
};

export function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        pendingLogin: true,
      };
    default:
      return state;
  }
}
