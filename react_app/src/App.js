
import { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Clock from "./Clock";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


let apikey = "af103c190cd36ff3f3fb1e0c135a2ee1";


class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state={
  //     fade1 : false,
  //     fade2 : false
  //   }
  // }
  render() {
    let cname = "lead";
    return (
      <div className='App'>
        <div className='clock'>
          <Clock format={'hh-mm'} />
        </div>
        <div class="d-flex justify-content-md-center align-items-center vh-100">
          <Jumbotron>
            <h1 className="display-3">Weather app stuff</h1>
            <p className={cname}> This is my first Weather App</p>
          </Jumbotron>
        </div>
      </div>
    )
  }
}

export default App;
