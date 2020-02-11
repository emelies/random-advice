import React from 'react';
import './App.css';
import AdviceComponent from "./advice-component"
import HeaderComponent from "./header-component"

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <AdviceComponent />
    </div>
  );
}

export default App;
