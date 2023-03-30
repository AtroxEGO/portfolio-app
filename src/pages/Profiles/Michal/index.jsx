import React, {useEffect} from 'react'
import classes from './michal.module.css'
import image from './towebsite.png'
import lever from './lever.png'

const Michal = () => {
    useEffect(()=>{
      const slider = document.getElementById("slider");
      const lever = document.getElementById("lever");


      slider.oninput = function(){
        
        if(slider.value == 1){
          lever.style.transform = "rotate(75deg)"
        }else if(slider.value == 2){
          lever.style.transform = "rotate(25deg)"
        }else if(slider.value == 3){
          lever.style.transform = "rotate(-20deg)"
        }else{
          lever.style.transform = "rotate(-65deg)"
        }
      }

    })

    
  
  return (
    <div className={classes.root}>
      <div className={classes.main}>

        <div className={classes.leftSide}>
          <h1>Michal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consequuntur consectetur ad eligendi magni praesentium reiciendis veniam harum reprehenderit deleniti!
          </p>
          <input type="button" value="hire me!" className={classes.hireMeButton}/>
        </div>

        <div className={classes.rightSide}>
          <div className={classes.switch_section}>
            <img src={image} className={classes.picker}/>
            <input type="range" min="1" max="4" id='slider'/>
            <img src={lever} className={classes.lever} id='lever'/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Michal