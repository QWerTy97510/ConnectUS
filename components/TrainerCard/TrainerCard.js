import React from 'react';
import classes from './TrainerCard.module.css';

const TrainerCard = (props) => {
  return (
    <div className={classes.TrainerCard}>
      <div className={classes.ImageDiv}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.TextDiv}>
        <p>Name: {props.name}</p>
        <p>Exp: {props.exp}</p>
        <p>Age: {props.age}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button className={classes.ButtonCard} onClick={props.modalShow}>
          Show Details
        </button>
      </div>
    </div>
  );
};

export default TrainerCard;
