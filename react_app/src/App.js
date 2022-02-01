
import { Component } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import { Jumbotron } from 'reactstrap';
import './App.css';

let apikey = "af103c190cd36ff3f3fb1e0c135a2ee1";


class App extends Component{
  
  // constructor(props){
  //   super(props);
  //   this.state={
  //     fade1 : false,
  //     fade2 : false
  //   }
  // }
  render(){
    let cname = "lead";
    return(
      <div>
        <Navbar />
        <Jumbotron>
          <h1 className = "display-3">Weather app stuff</h1>
          <p className = {cname}> This is my first Weather App</p>
          <hr className = {"my-2"}/>
          <p className = {cname}></p>
        </Jumbotron>
      </div>
    )
  }
}

export default App;
