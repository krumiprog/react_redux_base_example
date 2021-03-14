import { BUY_JUICE } from './juiceType';

export const buyJuice = (number = 1) => {
  return {
    type: BUY_JUICE,
    payload: number,
  };
};
