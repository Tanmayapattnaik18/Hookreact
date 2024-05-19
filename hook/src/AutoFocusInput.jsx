import React, { useEffect, useRef } from 'react';

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input ref={inputRef} type="text" placeholder="I will be focused automatically" />
  );
};

export default AutoFocusInput;
