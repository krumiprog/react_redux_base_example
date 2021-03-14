import { initialState } from './initialState';
import { BUY_MILK } from './milkType';

export const milkReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MILK:
      return { ...state, numberOfMilk: state.numberOfMilk + action.payload };
    default:
      return state;
  }
};
