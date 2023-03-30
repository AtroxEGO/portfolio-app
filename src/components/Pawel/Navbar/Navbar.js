import React from 'react'
import classes from './Navbar.module.css'
import { UilHome, UilFolder, UilEnvelope, UilInfo  } from '@iconscout/react-unicons'
import items from './navbarItems.js'
import { useLocation } from 'react-router'


const Navbar = ({onSectionChange}) => {

    const location = useLocation()

    const getIcon = (name) => {
        switch (name) {
            case "UilHome": return <UilHome className={classes.navbarIcon}/>
            case "UilFolder": return <UilFolder className={classes.navbarIcon}/>
            case "UilEnvelope": return <UilEnvelope className={classes.navbarIcon}/>
            case "UilInfo": return <UilInfo className={classes.navbarIcon}/>
        }
    }

    const handleClick = (id, title) => {
        console.log(id)
        onSectionChange[0](id)
        onSectionChange[1](title)
    }

    const singleItem = ({icon, desc, title}, i) => (
        <div className={classes.navbarItem} key={i} onClick={() => handleClick(i, title)}>
            <div className={classes.navbarButton}>
                {getIcon(icon)}
            </div>
            <div className={classes.navbarItemDesc} >{desc}</div>
        </div>
    );

  return (
    <div className={classes.root}>
        {items.items.map((elem,i) => singleItem(elem,i))}
    </div>
  )
}

export default Navbar