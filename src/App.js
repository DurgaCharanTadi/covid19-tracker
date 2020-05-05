import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={require('./images/logo.png')} alt="My Logo" id="myLogo" />
        <img src={require('./images/covid19-white.png')} alt="covid 19" id="covidLogo" />
      </div>
      <div className="content">
      </div>
    </div>
  );
}

export default App;
