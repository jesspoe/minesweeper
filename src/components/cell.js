import React from 'react';

const Cell = (props) => {
  return (
    <button className='btn' onClick={props.onButtonPress}>
      {props.children}
    </button>
  );
}

export default Cell;
