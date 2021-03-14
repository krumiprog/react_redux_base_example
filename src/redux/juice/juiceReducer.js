import { initialState } from './initialState';
import { BUY_JUICE } from './juiceType';

export const juiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_JUICE:
      return { ...state, numberOfJuice: state.numberOfJuice + action.payload };
    default:
      return state;
  }
};
