import React from 'react';
import ExampleComponent from '../../components/ExampleComponent/exampleComponent';
import Circle from '../../components/Circle/Circle';
import './example.css'
const Example = () => {

  return (
    <div className='root'>
      <h1>Example routing Page</h1>
      <ExampleComponent/>
      <Circle />
    </div>
  );
};
  
export default Example;