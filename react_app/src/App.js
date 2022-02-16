import { Component } from 'react';
import Cards from "./Cards";
// import './App.css';
import './App.css';
import React, { useState } from "react";
import { render } from '@testing-library/react';

const api = {
  key: "af103c190cd36ff3f3fb1e0c135a2ee1",
  base: "https://api.openweathermap.org/data/2.5/"
}



const App = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fade1: false,
  //     fade2: false,
  //     fade3: false,
  //     fade4: false,
  //     fade5: false,
  //     fade6: false

  //   }
  // } 
  function ApiCall() {
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
  } 
  // render(){
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
        <Cards
          fade1={this.state.fade1}
          cardOneState={this.cardOneState}
          fade2={this.state.fade2}
          cardTwoState={this.cardTwoState}
          fade3={this.state.fade3}
          cardThreeState={this.cardThreeState}
          fade4={this.state.fade4}
          cardFourState={this.cardFourState}
          fade5={this.state.fade5}
          cardFiveState={this.cardFiveState}
          fade6={this.state.fade6}
          cardSixState={this.cardSixState}
        />
      </div>
    );
  }
// }

export default App;

// return (
//   <div className="App">
//     <main>
//       <div className='search-box'>
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search..."
//           onChange = {e => setQuery(e.target.value)}
//           value = {query}
//           onKeyPress = {search}
//         />
//       </div>
//       {(typeof weather.main != "undefined") ? (
//         <div>
//           <div className='location-box'>
//             <div className='location'>{weather.name}, {weather.sys.country}</div>
//             <div className='date'>{dateBuilder(new Date())}</div>
//           </div>
//           <div className='temp'>
//             {(weather.main.temp)}
//           </div>
//           <div className='weather'>{weather.weather[0].main}</div>
//         </div>
//       ) : ('')}
//     </main>
//     <Cards
//       fade1={this.state.fade1}
//       cardOneState={this.cardOneState}
//       fade2={this.state.fade2}
//       cardTwoState={this.cardTwoState}
//       fade3={this.state.fade3}
//       cardThreeState={this.cardThreeState}
//       fade4={this.state.fade4}
//       cardFourState={this.cardFourState}
//       fade5={this.state.fade5}
//       cardFiveState={this.cardFiveState}
//       fade6={this.state.fade6}
//       cardSixState={this.cardSixState}
//     />
//   </div>
// );