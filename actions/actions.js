import { CHANGE_TRAINER, CLOSE_MODAL } from './actionsType';

export const changeTrainerHandler = (trainer) => {
  return {
    type: CHANGE_TRAINER,
    trainer: trainer,
  };
};

export const closeModalHandler = () => {
  return {
    type: CLOSE_MODAL,
  };
};
