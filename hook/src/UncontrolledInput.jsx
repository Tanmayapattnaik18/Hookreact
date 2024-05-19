import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    alert(`Current input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something" />
      <button onClick={handleInputChange}>Show Input Value</button>
    </div>
  );
};

export default UncontrolledInput;
