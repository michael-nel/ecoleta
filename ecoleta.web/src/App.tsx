import React, { useState } from 'react';
import './App.css';
import Routes from './routes'
function App() {
    const [counter , setCounter ] = useState(0);
    function handleButtonClick(){
        setCounter(counter + 1);
    }
  return (
      <div>
          <Routes />
      </div>
   );
}

export default App;
