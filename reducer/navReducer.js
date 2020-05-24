import {
  FORWARD_PAGE,
  BACKWARD_PAGE,
  SELECT_PAGE,
} from '../actions/actionsType';

const initialState = {
  pages: {
    0: '/',
    1: '/about',
    2: '/trainers',
    3: '/contact',
  },
  currentPage: 0,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORWARD_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case BACKWARD_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };

    case SELECT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};

export default navReducer;
