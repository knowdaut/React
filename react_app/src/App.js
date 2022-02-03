// import React, { useEffect, useState } from "react";
// import { Component } from 'react';
// import Navbar from "./Components/Navbar/Navbar";
// import { Jumbotron } from 'reactstrap';
// import './App.css';
import './App.css';
import React, { useEffect, useState } from "react";

export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);

  console.log("Latitude is:", lat)
  console.log("Longitude is:", long)

  return (
    <div className="App">
      There is nothing here
    </div>
  );
}

// class App extends Component{
  
//   // constructor(props){
//   //   super(props);
//   //   this.state={
//   //     fade1 : false,
//   //     fade2 : false
//   //   }
//   // }
//   render(){
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
