import React, { useState, useEffect } from 'react'
import ContactSection from '../../../components/Pawel/ContactSection/ContactSection';
import ConsoleHeader from '../../../components/Pawel/Header/ConsoleHeader';
import HomeSection from '../../../components/Pawel/HomeSection/HomeSection';
import InfoSection from '../../../components/Pawel/InfoSection/InfoSection';
import Navbar from '../../../components/Pawel/Navbar/Navbar';
import ProjectsSection from '../../../components/Pawel/ProjectsSection/ProjectsSection';
import classes from './Pawel.module.css'

const Pawel = () => {

  const [currentSection, setCurrentSection] = useState(0);
  const [consoleText, setConstoleText] = useState("Hello World");

  const getSection = (id) => {
    switch (id) {
      case 0: return <HomeSection />
      case 1: return <ProjectsSection />
      case 2: return <InfoSection />
      case 3: return <ContactSection />
    }
  }

  return (
    <div className={classes.root}>
      <Navbar currentSection={currentSection} onSectionChange={[setCurrentSection, setConstoleText]}/>
      <div className={classes.header}><ConsoleHeader text={consoleText}/></div>
      <div className={classes.sectionRoot}>
        {getSection(currentSection)}
      </div>
    </div>
  )
}

export default Pawel