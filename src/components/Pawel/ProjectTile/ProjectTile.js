import React from 'react'
import classes from './ProjectTile.module.css'
import { UilArrowRight } from '@iconscout/react-unicons'

const ProjectTile = ({
    title = "Default Title",
    desc = "Default Description",
    image,
    language = "Default Language",
    languageColor = "blue",
    link = "/pawel",
}) => {
  return (
    <div className={classes.root}>
        <a href={link} target="_blank">
            {image ? <img src={image} alt='logo' className={classes.logo}/> : null}
            <div className={classes.tileText}>
                <div className={classes.title}>{title}</div>
                <div className={classes.desc}>{desc}</div>
                <div className={classes.bottom}>
                    <div className={classes.bottomLeft}>
                        <div className={classes.dot} style={{background: languageColor}}></div> {language}
                    </div>
                    <div className={classes.bottomRight}><UilArrowRight /></div>
                </div>
            </div>
        </a>
    </div>
  )
}

export default ProjectTile