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
          <div className='personName'><span>Paweł</span></div>
          </div>
          <div className="slice">
          <div className='personName'><span>O&nbsp;Nas</span></div>
          </div>
        </div>
    </div>
  );
}

export default Circle;