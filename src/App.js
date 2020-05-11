import React, {useState} from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Card from 'react-bootstrap/Card';
import {  ListGroup, ListGroupItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberFormat from 'react-number-format';

var infiniteFlag = true;
// import axios from "axios";



function App() {



  const [query,setQuery] = useState([]);
  const [countrydetails,setCountry] = useState([]);
  const [alldetails,setAlldetails] = useState([]);
  const [flagDetails, setFlag] = useState([]);

  console.log("infi flag: " + infiniteFlag);

  if((query == "")&&(infiniteFlag == true)){

    fetch(`https://corona.lmao.ninja/v2/all`)
    .then(resAll => resAll.json())
    .then(resultAll => {
      infiniteFlag = false;
      console.log("infi flag: " + infiniteFlag);
      setAlldetails(resultAll);
      console.log(resultAll);
    },[]);
  }

  const search = e =>{
   if(e.key === "Enter"){

     fetch(`https://corona.lmao.ninja/v2/countries/${query}`)
     .then(res => res.json())
     .then(result => {
       infiniteFlag = true;
       setCountry(result);
       // console.log(result);
       setFlag(result.countryInfo.flag);

     })
   }
 }

  return (
    <div className="App">
      <div className="header">
        <img src={require('./images/logo.png')} alt="My Logo" id="myLogo" />
        <h3>COVID19 Tracker</h3>
        <img src={require('./images/covid19-white.png')} alt="covid 19" id="covidLogo" />
      </div>
      <div className="content">
      <input type="text" placeholder="Search for the Country"
              onChange={e =>setQuery(e.target.value)}
              value={query}
              onKeyPress = {search}/>

        <div className="main_content">
        <div>
        {(query == "" )? (
          <Card className="countries_list">
             <Card.Img variant="top"  src= {require('./images/world_map.png')}/>
             <Card.Body>
               <Card.Title>World</Card.Title>
               <Card.Text>
               </Card.Text>
             </Card.Body>
             <ListGroup className="list-group-flush">
               <ListGroupItem>Cases per One Million: <NumberFormat value={alldetails.casesPerOneMillion} displayType={'text'} thousandSeparator={true} /></ListGroupItem>
               <ListGroupItem>Deaths per One Million: {alldetails.deathsPerOneMillion}</ListGroupItem>
               <ListGroupItem>Total Tests: <NumberFormat value={alldetails.tests} displayType={'text'} thousandSeparator={true} /></ListGroupItem>
               <ListGroupItem>Tests per One Million: {alldetails.testsPerOneMillion}</ListGroupItem>
               <ListGroupItem>New Cases: {alldetails.todayCases}</ListGroupItem>
               <ListGroupItem>New Deaths: {alldetails.todayDeaths}</ListGroupItem>
             </ListGroup>
          </Card>
            ) : (
              <Card className="countries_list">
                 <Card.Img variant="top"  src={flagDetails} />
                 <Card.Body>
                   <Card.Title>{countrydetails.country}</Card.Title>
                   <Card.Text>
                   </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                   <ListGroupItem>Cases per One Million: {countrydetails.casesPerOneMillion}</ListGroupItem>
                   <ListGroupItem>Deaths per One Million: {countrydetails.deathsPerOneMillion}</ListGroupItem>
                   <ListGroupItem>Total Tests: {countrydetails.tests}</ListGroupItem>
                   <ListGroupItem>Tests per One Million: {countrydetails.testsPerOneMillion}</ListGroupItem>
                   <ListGroupItem>New Cases: {countrydetails.todayCases}</ListGroupItem>
                   <ListGroupItem>New Deaths: {countrydetails.todayDeaths}</ListGroupItem>
                   </ListGroup>
              </Card>
          )}

        </div>
            {(query == "" )? (
            <div className="cases_blocks">
              <div className="cases_blocks_1">
                <div className="total_number_cases">
                  <p>Confirmed Cases</p>
                  <p>{alldetails.cases}</p>
                </div>
                <div className="active_cases">
                  <p>Active Cases</p>
                  <p>{alldetails.active}</p>
                </div>
              </div>

              <div className="cases_blocks_2">
                <div className="total_deaths">
                  <p>Total Deaths</p>
                  <p>{alldetails.deaths}</p>
                </div>
                <div className="recovered_cases">
                  <p>Recovered Cases</p>
                  <p>{alldetails.recovered}</p>
              </div>
              </div>

          </div>
        ) : (
          <div className="cases_blocks">
            <div className="cases_blocks_1">
              <div className="total_number_cases">
                <p>Confirmed Cases</p>
                <p>{countrydetails.cases}</p>
              </div>
              <div className="active_cases">
                <p>Active Cases</p>
                <p>{countrydetails.active}</p>
              </div>
            </div>

            <div className="cases_blocks_2">
              <div className="total_deaths">
                <p>Total Deaths</p>
                <p>{countrydetails.deaths}</p>
              </div>
              <div className="recovered_cases">
                <p>Recovered Cases</p>
                <p>{countrydetails.recovered}</p>
            </div>
            </div>

        </div>
      )}
      </div>

    </div>
    </div>
  );
}

export default App;
