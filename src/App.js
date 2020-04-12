import React from 'react';
import { Button } from './components'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Button library="antd" variant="primary" onClick={() => console.log('putito')}>Elemento</Button>
      <Button variant="primary" onClick={() => console.log('putito')}>Elemento</Button>
    </div>
  );
}

export default App;
