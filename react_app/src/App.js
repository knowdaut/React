
import { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Clock from "./Clock";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


let apikey = "af103c190cd36ff3f3fb1e0c135a2ee1";


class App extends Component {
  render() {
    return (
      <div className='App vh-100'>
        <div className='current'>
          <Clock format={'hh-mm'} />
          <div className='location'>
            <center><p>Columbus, GA</p></center>
          </div>
          <div className='current-icon'>
            <center><i class="fas fa-cloud fa-2x"></i></center>
          </div>
          <div className='current-temp'>
            <center><p>63&#176;F</p></center>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div className="input-group">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn">Search</button>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
