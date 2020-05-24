import { CHANGE_TRAINER, CLOSE_MODAL } from '../actions/actionsType';

const initialState = {
  trainer: {},
  showModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TRAINER:
      return {
        ...state,
        trainer: action.trainer,
        showModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
