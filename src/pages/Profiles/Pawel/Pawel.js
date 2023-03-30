import React, { useState, useEffect } from 'react'
import ConsoleHeader from '../../../components/Pawel/Header/ConsoleHeader';
import HomeSection from '../../../components/Pawel/HomeSection/HomeSection';
import Navbar from '../../../components/Pawel/Navbar/Navbar';
import classes from './Pawel.module.css'

const Pawel = () => {

  const [currentSection, setCurrentSection] = useState(0);
  const [consoleText, setConstoleText] = useState("Hello World");

  const getSection = (id) => {
    switch (id) {
      case 0: return <HomeSection />
      case 1: return <div>Projects</div>
      case 2: return <div>Info</div>
      case 3: return <div>Contact</div>
    }
  }

  return (
    <div className={classes.root}>
      <Navbar onSectionChange={[setCurrentSection, setConstoleText]}/>
      <ConsoleHeader text={consoleText}/>
      <div className={classes.sectionRoot}>
        {getSection(currentSection)}
      </div>
    </div>
  )
}

export default Pawel