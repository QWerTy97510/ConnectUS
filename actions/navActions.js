import { FORWARD_PAGE, BACKWARD_PAGE, SELECT_PAGE } from './actionsType';

export const forwardPage = () => {
  return {
    type: FORWARD_PAGE,
  };
};

export const backwardPage = () => {
  return {
    type: BACKWARD_PAGE,
  };
};

export const selectPage = (num) => {
  return {
    type: SELECT_PAGE,
    currentPage: num,
  };
};
