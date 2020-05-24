import React from 'react';
import classes from './Dot.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectPage } from '../../store/actions/index';

const Dot = (props) => {
  const dispatch = useDispatch();

  const selectPageHandler = (num) => {
    dispatch(selectPage(num));
  };

  return (
    <NavLink to={props.path} activeClassName='active' exact>
      <div
        className={classes.Dot}
        onClick={() => selectPageHandler(+props.num)}></div>
    </NavLink>
  );
};

export default Dot;
