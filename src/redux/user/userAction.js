import { REQUEST, SUCCESS, FAILURE } from './userType';

export const fetchRequest = () => {
  return {
    type: REQUEST,
  };
};

export const fetchSuccess = users => {
  return {
    type: SUCCESS,
    payload: users,
  };
};

export const fetchFailure = error => {
  return {
    type: FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchRequest);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        dispatch(fetchSuccess(users));
      })
      .catch(error => {
        dispatch(fetchFailure(error.message));
      });
  };
};
