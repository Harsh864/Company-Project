import React from 'react';

const ChildComponent = ({ data, onClickHandler }) => {
  return (
    <div>
      <p>{data}</p>
      <button onClick={onClickHandler}>Update Data</button>
    </div>
  );
};

export default ChildComponent;
