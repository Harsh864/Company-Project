import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState('Hello from Parent');

  const handleClick = () => {
    setData('Data updated by Parent');
  };

  return (
    <div>
      <ChildComponent data={data} onClickHandler={handleClick} />
    </div>
  );
};

export default ParentComponent;
