// import { Component } from 'react';
// import Navbar from "./Components/Navbar/Navbar";
// import { Jumbotron } from 'reactstrap';
// import './App.css';
import './App.css';
import React, { useEffect, useState } from "react";


let apiKey = 'af103c190cd36ff3f3fb1e0c135a2ee1';
let latt = 33.44;
let longg =  -94.04;



export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latt}&lon=${longg}&appid=${apiKey}&units=imperial`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
      blahhh
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

// export default App;
