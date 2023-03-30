import React from 'react'
import classes from './Chat.module.css'
import ConsoleHeader from '../../../../components/Pawel/Header/ConsoleHeader';

const PChat = () => {
  return (
    <div className={classes.root}>
      <ConsoleHeader text="Chat"/>
      <div className={classes.chatContainer}>
        <div className={classes.chatBox}></div>
      </div>
    </div>
  )
}

export default PChat