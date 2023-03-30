import React from 'react'
import classes from './HomeSection.module.css'


const HomeSection = () => {
  return (
    <div className={classes.root}>
        <div><span className={classes.symbolSpan}>&lt;</span> My name is <span className={classes.greenText}>Paweł Polakiewicz </span><span className={classes.symbolSpan}>&gt;</span></div>
        <div className={classes.indentedParagraph}><span className={classes.symbolSpan}>&lt;</span> I am an <span className={classes.orangeUnderline}>Software Engineer</span><span className={classes.slashSpan}> /</span><span className={classes.symbolSpan}>&gt;</span></div>
        <div className={classes.indentedParagraph}><span className={classes.symbolSpan}>&lt;</span> And i belive that coding is not only <span className={classes.blueText}>!Important</span> but also that it's <span className={classes.artText}>Art</span> <span className={classes.slashSpan}>/</span><span className={classes.symbolSpan}>&gt;</span></div>

        <span className={classes.symbolSpan}>&lt;</span><span className={classes.slashSpan}>/</span><span className={classes.symbolSpan}>&gt;</span>
    </div>
    // 
  )
}

export default HomeSection