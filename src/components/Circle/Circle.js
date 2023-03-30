import React from 'react';
import classes from './Circle.module.css';

function Circle() {
  return (
    <div className={classes.root}>
        <div className={classes.circle}>

          <div className={classes.slice}>
            <a href='/michal'>
              <div className={classes.personName}>
                <span>Michal</span>
              </div>
            </a>
          </div>

          <div className={classes.slice}>
            <a href='/jakub'>
              <div className={classes.personName}>
                <span>Jakub</span>
              </div>
            </a>
          </div>

          <div className={classes.slice}>
            <a href='/pawel'>
              <div className={classes.personName}>
                <span>Paweł</span>
              </div>
            </a>
          </div>

          <div className={classes.slice}>
            <a href='/onas'>
              <div className={classes.personName}>
                <span>O Nas</span>
              </div>
            </a>
          </div>

        </div>
    </div>
  );
}

export default Circle;