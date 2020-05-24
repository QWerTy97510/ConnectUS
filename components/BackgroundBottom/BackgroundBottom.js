import React, { useState, useEffect } from 'react';
import classes from './BackgroundBottom.module.css';
import Arrow from '../../assets/SVG-uri/Arrow.svg';
import { Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import NavigationDots from '../NavigationDots/NavigationDots';
import { useSelector, useDispatch } from 'react-redux';
import {
  forwardPage,
  backwardPage,
  selectPage,
} from '../../store/actions/index';

if (document.body.classList.contains('pager-forward-exit-active')) {
  document
    .querySelector(classes.ArrowRight)
    .addEventListener('click', () => {});
}

const BackgroundBottom = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const routes = useSelector((state) => state.navReducer.pages);
  const currentPage = useSelector((state) => state.navReducer.currentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage === 3) {
      setShowRightArrow(false);
    } else if (currentPage >= 0) {
      setShowRightArrow(true);
    }

    if (currentPage >= 1) {
      setShowLeftArrow(true);
    } else if (currentPage === 0) {
      setShowLeftArrow(false);
    }
  }, [currentPage]);

  const increase = () => {
    dispatch(forwardPage());
  };

  const decrease = () => {
    dispatch(backwardPage());
  };

  if (currentPage < 0) {
    dispatch(selectPage(0));
  }

  if (currentPage > 3) {
    dispatch(selectPage(3));
  }

  const phrases = [
    "Still here? Let's continue then!",
    'Sounds good? Go further!',
    'One step left!',
    "You're the best!",
  ];

  return (
    <div className={classes.BackgroundBottom}>
      <Redirect to={routes[currentPage]} />
      <CSSTransition
        in={showRightArrow}
        timeout={800}
        classNames='rightArrow'
        unmountOnExit
        mountOnEnter>
        <img
          src={Arrow}
          className={classes.ArrowRight}
          onClick={increase}
          alt='ArrowRight'
        />
      </CSSTransition>

      <CSSTransition
        in={showLeftArrow}
        timeout={800}
        classNames='leftArrow'
        mountOnEnter
        unmountOnExit>
        <img
          src={Arrow}
          className={classes.ArrowLeft}
          onClick={decrease}
          alt='ArrowLeft'
        />
      </CSSTransition>
      <h2 className='backgroundBottomTextBottom'>{phrases[currentPage]}</h2>
      <NavigationDots />
    </div>
  );
};

export default BackgroundBottom;
