import React from 'react'
import ProjectTile from '../ProjectTile/ProjectTile'
import classes from './ProjectsSection.module.css'
import projects from './projects.js'

const ProjectsSection = () => {
  return (
    <div className={classes.root}>
      {projects.projects.map(({title, desc, image, language, languageColor, link}) => <ProjectTile title={title} desc={desc} image={image} language={language} languageColor={languageColor} link={link}/>)}
    </div>
  )
}

export default ProjectsSection