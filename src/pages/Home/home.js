import React from 'react';
import Circle from '../../components/Circle/Circle';
import classes from './home.module.css'

const Home = () => {
  return (
    <div className={classes.root}>
      <Circle />
    </div>
  );
};
  
export default Home;