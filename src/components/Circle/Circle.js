import React from 'react';
import './Circle.css';

function Circle() {
  return (
    <div className='root'>
        <div className="circle">

          <div className="slice">
            <a href='/michal'>
              <div className='personName'>
                <span>Michal</span>
              </div>
            </a>
          </div>

          <div className="slice">
            <a href='/jakub'>
              <div className='personName'>
                <span>Jakub</span>
              </div>
            </a>
          </div>

          <div className="slice">
            <a href='/pawel'>
              <div className='personName'>
                <span>Paweł</span>
              </div>
            </a>
          </div>

          <div className="slice">
            <a href='/onas'>
              <div className='personName'>
                <span>O Nas</span>
              </div>
            </a>
          </div>

        </div>
    </div>
  );
}

export default Circle;