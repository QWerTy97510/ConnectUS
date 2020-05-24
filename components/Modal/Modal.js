import React from 'react';
import classes from './Modal.module.css';
import TrainerDetails from '../TrainerDetails/TrainerDetails';

const Modal = (props) => {
  return (
    <div className={classes.Modal}>
      <TrainerDetails />
    </div>
  );
};

export default Modal;
