import React from 'react';
import Dot from '../Dot/Dot';
import classes from './NavigationDots.module.css';
import { useSelector } from 'react-redux';

const NavigationDots = () => {
  const paths = useSelector((state) => state.navReducer.pages);
  const pages = [];

  for (let key in paths) {
    pages.push([key, paths[key]]);
  }

  return (
    <div className={classes.NavigationDots}>
      {pages.map((page) => {
        return <Dot path={page[1]} num={page[0]} key={page[0]} />;
      })}
    </div>
  );
};

export default NavigationDots;
