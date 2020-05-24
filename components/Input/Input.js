import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.InputDiv}>
      <input
        name={props.name}
        type={props.type}
        className={classes.Input}
        placeholder={props.name}
        required={props.required}
      />
      <span className={classes.Span}></span>
    </div>
  );
};

export default Input;
