import React from 'react';
import Paragraphs from '../../components/Paragraphs/Paragraphs';
import BackgroundMiddle from '../../components/BackgroundMiddle/BackgroundMiddle';
import HomeImage from '../../assets/SVG-uri/HomeSVG.svg';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <React.Fragment>
      <BackgroundMiddle>
        <div className={classes.HomePageBackgroundMiddleText}>
          <Paragraphs>
            <p>For starters, you probably wonder who we are?</p>
            <p>Good question!</p>
          </Paragraphs>
          <Paragraphs>
            <p style={{ marginTop: '80px' }}>
              Well, we are a team of programmers who offer young people
              passionate about modeling the digital world, new projects and
              career opportunities.
            </p>
          </Paragraphs>
        </div>
        <React.Fragment>
          <img
            src={HomeImage}
            className={classes.BackgroundMiddleHomeImg}
            alt='Home'
          />
        </React.Fragment>
      </BackgroundMiddle>
    </React.Fragment>
  );
};

export default HomePage;
