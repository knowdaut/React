// import { Component } from 'react';
// import Navbar from "./Components/Navbar/Navbar";
// import { Jumbotron } from 'reactstrap';
// import './App.css';
import './App.css';
import React, { useState } from "react";

const api = {
  key: "af103c190cd36ff3f3fb1e0c135a2ee1",
  base: "https://api.openweathermap.org/data/2.5"
}
// let apiKey = 'af103c190cd36ff3f3fb1e0c135a2ee1';




function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt =>{
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });          
    }
  }
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });

  //     await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`)
  //     .then(res => res.json())
  //     .then(result => {
  //       setData(result)
  //       console.log(result);
  //     });
  //   }
  //   fetchData();
  // }, [lat,long])
  
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
        <div className='location-box'>
          <div className='location'>New York City, US</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='temp'>15c</div>
        <div className='weather'>Sunny</div>
      </main>
    </div>
  );
}

// function App(){
//   console.log("Hello");
// }




// class App extends Component{
  
//   // constructor(props){
//   //   super(props);
//   //   this.state={
//   //     fade1 : false,
//   //     fade2 : false
//   //   }
//   // }
//   render(){
//     console.log('please work');
//     let cname = "lead";
//     return(
//       <div>
//         <Navbar />
//         <Jumbotron>
//           <h1 className = "display-3">Weather app stuff</h1>
//           <p className = {cname}> This is my first Weather App</p>
//           <hr className = {"my-2"}/>
//           <p className = {cname}></p>
//         </Jumbotron>
//       </div>
//     )
//   }
// }

export default App;
