import React from "react";
import classes from "./Main.module.css";
const Main = () => {

    const click = () => {
        const element = document.getElementById('projects')
        if(element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

  return (
    <div>
      <div className={classes.main}>
        <div className={classes.background}></div>
        <div className={classes.mainTitle}>
          Hello, I'm <span className={classes.mainSpan}>Jakub</span>
        </div>
        <div className={classes.mainNav}>
          <div className={classes.underline}>contact</div>
          <div className={classes.underline} onClick={click}>projects</div>
        </div>
      </div>

    </div>
  );
};

export default Main;
