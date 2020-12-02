import React from 'react';
import './App.css';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home title="Hello Typescript" />
      </header>
    </div>
  );
}

export default App;
