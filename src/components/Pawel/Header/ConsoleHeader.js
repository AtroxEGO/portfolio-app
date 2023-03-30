import React, { useState, useEffect } from 'react'
import classes from './ConsoleHeader.module.css'

const ConsoleHeader = ({
    text = "Hello World",
}) => {

    const [currentText, setCurrentText] = useState(text);
    const [cuttingText, setCuttingText] = useState(true);
  
    useEffect(() => {
      const interval = window.setInterval(() => {
        if (cuttingText) {
          setCurrentText((prevCurrentText) => text.substring(0, prevCurrentText.length - 1))
          if (currentText.length == 0) window.setTimeout(() => {
            setCuttingText(false)
          }, 500)
        } else {
          setCurrentText((prevCurrentText) => text.substring(0, prevCurrentText.length + 1))
          if (currentText.length == text.length) window.setTimeout(() => {
            setCuttingText(true)
          }, 500)
        }
      }, 200)
  
      return () => clearInterval(interval);
    })

  return (
    <div className={classes.header}>
        <span id='text'>{currentText}</span>
        <div className={classes.consoleUnderscore} id='console'>&#95;</div>
    </div>
  )
}

export default ConsoleHeader