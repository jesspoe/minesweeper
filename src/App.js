import React from 'react';
import './App.css';
import Board from './components/board'

function App() {

  return (
    <div>
      <header align="center">
        <h1>Welcome to Minesweeper</h1>
      </header>
      <div className="app">
        <Board />
      </div>
    </div>
  );
}

export default App;
