import React, { useRef } from 'react';

const ColorChanger = () => {
  const divRef = useRef(null);

  const handleDivClick = () => {
    divRef.current.style.backgroundColor = 'lightblue';
  };

  return (
    <div
      ref={divRef}
      onClick={handleDivClick}
      style={{ width: '200px', height: '40px', backgroundColor: 'lightcoral',borderradius:'2px' }}
    >
      Click me to change my color
    </div>
  );
};

export default ColorChanger;
