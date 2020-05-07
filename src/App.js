import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={require('./images/logo.png')} alt="My Logo" id="myLogo" />
        <h3>COVID19 Tracker</h3>
        <img src={require('./images/covid19-white.png')} alt="covid 19" id="covidLogo" />
      </div>
      <div className="content">
        <div className="main_content">
            <div className="countries_list">
              <table>
              <tr><th>Countries</th></tr>
              <tr><td>USA</td></tr>
              <tr><td>UK</td></tr>
              <tr><td>India</td></tr>
              <tr><td>USA</td></tr>
              <tr><td>UK</td></tr>
              <tr><td>India</td></tr>
              <tr><td>USA</td></tr>
              <tr><td>UK</td></tr>
              <tr><td>India</td></tr>
              </table>
            </div>
            <div className="cases_blocks">
              <div className="cases_blocks_1">
                <div className="total_number_cases">
                  <p>Total Number Cases</p>
                  <p>1,125,676</p>
                </div>
                <div className="active_cases">
                  <p>Active Cases</p>
                  <p>125,676</p>
                </div>
              </div>
              <div className="cases_blocks_2">
                <div className="total_deaths">
                  <p>Total Deaths</p>
                  <p>5,676</p>
                </div>
                <div className="recovered_cases">
                  <p>Recovered Cases</p>
                  <p>115,676</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
