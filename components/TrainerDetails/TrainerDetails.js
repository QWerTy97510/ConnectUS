import React from 'react';
import classes from './TrainerDetails.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Close from '../../assets/SVG-uri/CloseSVG.svg';
import { CLOSE_MODAL } from '../../store/actions/actionsType';

const TrainerDetails = (props) => {
  const trainer = useSelector((state) => {
    return state.reducer.trainer;
  });

  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <div className={classes.TrainerDetails}>
      <div className={classes.TrainerDetailsInfo}>
        <div className={classes.TrainerDetailsInfoImage}>
          <img src={trainer.image} alt={trainer.name} />
        </div>
        <div className={classes.TrainerDetailsInfoDescription}>
          <p>{trainer.name}</p>
          <p>{trainer.address}</p>
          <p>{trainer.exp}</p>
          <p>Hobbie: {trainer.hobbie}</p>
          <p>{trainer.email}</p>
          <p>{trainer.phone}</p>
        </div>
      </div>
      <div className={classes.TrainerDetailsMessage}>
        <img src={Close} alt='Close' onClick={closeModalHandler} />
        <div className={classes.TrainerDetailsMessageDescription}>
          <h2>Description</h2>
          <p>{trainer.description}</p>
        </div>
        <div className={classes.TrainerDetailsMessageMsg}>
          <h2>Message from {trainer.name}</h2>
          <p>{trainer.message}</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
