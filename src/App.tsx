import React from 'react';
import { ReactComponent as Logo} from './ui/images/lifeleap-logo.svg';
import NavBar from './ui/NavBar/NabBar';
import Services from './ui/Services/Services';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-logo"><Logo /></div>
        <NavBar />
      </header>
      <Services />
    </div>
  );
}

export default App;
