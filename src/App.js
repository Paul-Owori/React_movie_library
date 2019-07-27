import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesLibrary from './MoviesLibrary/MoviesLibrary';

function App() {
  return (
    <div className="App">
      <header className ="App-header">
        <MoviesLibrary/>
      </header>
    </div>
  );
}

export default App;
