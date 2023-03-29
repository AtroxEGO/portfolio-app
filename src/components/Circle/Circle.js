import React from 'react';
import './Circle.css'; // Import the CSS file with styles

function Circle() {
  return (
    <div className='root'>
        <div className="circle">
          <div className="slice">
          <div className='personName'><span>Michał</span></div>
          </div>
          <div className="slice">
          <div className='personName'><span>Kuba</span></div>
          </div>
          
          <div className="slice">
            <a href='/pawel'>
              <div className='personName'>
                <span>Paweł</span>
              </div>
            </a>
          </div>
          
          <div className="slice">
          <div className='personName'><span>O&nbsp;Nas</span></div>
          </div>
        </div>
        
        {/* <div className="pie">
        <button className='firstPie'>
            <span className="text">Paweł</span>    
        </button>
        <button className='secondPie'>
            <span className="text">Michał</span>    
        </button>
        <button className='thirdPie'>
            <span className="text">Jakub</span>    
        </button>
        </div> */}
    </div>
  );
}

export default Circle;