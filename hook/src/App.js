import React from 'react';
import AutoFocusInput from './AutoFocusInput';
import UncontrolledInput from './UncontrolledInput';
import ColorChanger from './ColorChanger';

function App() {
  return (
    <div className="App">
      <h1>Exploring useRef Hook in React</h1>
      <AutoFocusInput />
      <UncontrolledInput />
      <ColorChanger />
    </div>
  );
}

export default App;
