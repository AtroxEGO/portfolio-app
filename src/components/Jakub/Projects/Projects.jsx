import React from "react";
import classes from "./Projects.module.css";
const Projects = () => {
  return (
    <div className={classes.projects} id="projects">
      <div className={classes.projectsContainer}>
        <p>Nothing to see here (yet)</p>
        <p>checkout:</p>
        <div className={classes.github}>
        <a href="https://github.com/porez0" target="_blank" rel="noreferrer">
          <img src="/jakub/GitHub-Mark.png" alt="githubLogo" className={classes.githubLogo}/>
          Github</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
