import React from 'react';
import BackgroundMiddle from '../../components/BackgroundMiddle/BackgroundMiddle';
import AboutImage from '../../assets/SVG-uri/AboutSVG.svg';
import classes from './AboutPage.module.css';
import Paragraphs from '../../components/Paragraphs/Paragraphs';

const AboutPage = () => {
  return (
    <React.Fragment>
      <BackgroundMiddle>
        <img
          src={AboutImage}
          className={classes.BackgroundMiddleAboutImg}
          alt='About'
        />
        <Paragraphs>
          <h2>How do we work?</h2>
          <p className={classes.AboutPageParagraphFirst}>We have four steps:</p>
          <ol>
            <li>Create teams of 3 people</li>
            <li>Add an instructor</li>
            <li>Take a project from client</li>
            <li>Realize the project</li>
          </ol>
          <p className={classes.AboutPageParagraphSecond}>
            Don't worry, you will be paid for your work, and everything will be
            done through online meetings!
          </p>
        </Paragraphs>
      </BackgroundMiddle>
    </React.Fragment>
  );
};

export default AboutPage;
