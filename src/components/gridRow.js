import React from 'react';

const gridRow = (props) => {
  return (
    <div className="grid-row">
      {props.children}
    </div>
  );
}

export default gridRow;
