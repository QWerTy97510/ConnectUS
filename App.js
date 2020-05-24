import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BackgroundBottom from './components/BackgroundBottom/BackgroundBottom';
import HomePage from './containers/HomePage/HomePage';
import AboutPage from './containers/AboutPage.js/AboutPage';
import TrainersPage from './containers/TrainersPage/TrainersPage';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ContactPage from './containers/ContactPage/ContactPage';
import { withRouter } from 'react-router-dom';

const routes = [
  { id: 1, path: '/', name: 'Home', Component: HomePage },
  { id: 2, path: '/about', name: 'About', Component: AboutPage },
  { id: 3, path: '/trainers', name: 'Trainers', Component: TrainersPage },
  { id: 4, path: '/contact', name: 'Contact', Component: ContactPage },
];

function App() {
  return (
    <div className='App'>
      <Header />
      {routes.map(({ id, path, Component }) => {
        return (
          <Route key={id} path={path} exact>
            {({ match, history }) => {
              return (
                <CSSTransition
                  in={match !== null}
                  timeout={1600}
                  classNames='pager-forward'
                  mountOnEnter
                  unmountOnExit>
                  <Component history={history} />
                </CSSTransition>
              );
            }}
          </Route>
        );
      })}
      {/* </div> */}
      <BackgroundBottom />
    </div>
  );
}

export default withRouter(App);
