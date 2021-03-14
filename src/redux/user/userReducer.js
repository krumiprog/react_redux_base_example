import { REQUEST, SUCCESS, FAILURE } from './userType';
import { initialState } from './initialState';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true };
    case SUCCESS:
      return { loading: false, users: action.payload, error: '' };
    case FAILURE:
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};
