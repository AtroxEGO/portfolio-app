import React from 'react';
import './Circle.css'; // Import the CSS file with styles

function Circle() {
  return (
    <div className='root'>
        <div className="circle">
          <div className="slice">
            <span>Michał</span>
          </div>
          <div className="slice">
          <span>Kuba</span>
          </div>
          <div className="slice">
          <span>Paweł</span>
          </div>
          <div className="slice">
          <span>O&nbsp;Nas</span>
          </div>
        </div>
    </div>
  );
}

export default Circle;