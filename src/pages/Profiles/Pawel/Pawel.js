import React, { useState, useEffect } from 'react'
import ConsoleHeader from '../../../components/Pawel/Header/ConsoleHeader';
import Navbar from '../../../components/Pawel/Navbar/Navbar';
import classes from './Pawel.module.css'

const Pawel = () => {


  return (
    <div className={classes.root}>
      <Navbar />
      <ConsoleHeader text='Hello World'/>
      <div className={classes.mainInfo}>
        {/* My name is Paul */}
      </div>
    </div>
  )
}

export default Pawel