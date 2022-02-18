import { Component } from 'react';
import Card from './Cards.js' 
// import './App.css';
import './App.css';
import React, { useState } from "react";

const api = {
  key: "af103c190cd36ff3f3fb1e0c135a2ee1",
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {
  const [fade1, setFade1] = useState(false);
  const [fade2, setFade2] = useState(false);
  const [fade3, setFade3] = useState(false);
  const [fade4, setFade4] = useState(false);
  const [fade5, setFade5] = useState(false);
  

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt =>{
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });          
    }
  }
  
  const dateBuilder = (d) => {
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    

    return `${day} ${date} ${month} ${year}`
    
    
  } 
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange = {e => setQuery(e.target.value)}
            value = {query}
            onKeyPress = {search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='temp'>
              {(weather.main.temp)}
            </div>
            <div className='weather'>{weather.weather[0].main}</div> 
          </div>
          
        ) : ('')}
      </main>
      <Card cardOneState={() => setFade1(!fade1)} cardTwoState={() => setFade2(!fade2)} cardThreeState={() => setFade3(!fade3)} cardFourState={() => setFade4(!fade4)} cardFiveState={() => setFade5(!fade5)} fade1={fade1} fade2={fade2} fade3={fade3} fade4={fade4} fade5={fade5}/>
    </div>
  );
}


export default App;

