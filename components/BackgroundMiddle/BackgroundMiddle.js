import React from 'react';
import classes from './BackgroundMiddle.module.css';

const BackgroundMiddle = (props) => {
  return <div className={classes.BackgroundMiddle}>{props.children}</div>;
};

export default BackgroundMiddle;
