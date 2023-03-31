import React from 'react'
import Main from '../../../components/Jakub/Main/Main'
import Projects from '../../../components/Jakub/Projects/Projects'
import classes from './Jakub.module.css'
const Jakub = () => {

    alert('note that this site is WIP (work in progress)')

  return (
    <div className={classes.scroll}>
        <Main />
        <Projects />
    </div>
  )
}

export default Jakub