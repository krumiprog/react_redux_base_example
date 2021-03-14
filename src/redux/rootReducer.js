import { combineReducers } from 'redux';
import { milkReducer } from './milk/milkReducer';
import { juiceReducer } from './juice/juiceReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
  milk: milkReducer,
  juice: juiceReducer,
  user: userReducer,
});
