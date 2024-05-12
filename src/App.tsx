import React from 'react';
import logo from './logo.svg';
import NavBar from './ui/NavBar/NabBar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-logo">Logo</div>
        <NavBar />
      </header>
      <div>Header pic</div>
    </div>
  );
}

export default App;
