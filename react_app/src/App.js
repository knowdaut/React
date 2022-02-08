
import { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Cards from "./Cards";
import Clock from "./Clock";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


let apikey = "af103c190cd36ff3f3fb1e0c135a2ee1";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade1: false,
      fade2: false,
      fade3: false,
      fade4: false,
      fade5: false,
      fade6: false

    }
  }
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
            <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn">Search</button>
          </div>
        </div>
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
    )
  }
  cardOneState = () => {
    this.setState({ fade1: !this.state.fade1 })
  }

  cardTwoState = () => {
    this.setState({ fade2: !this.state.fade2 })
  }

  cardThreeState = () => {
    this.setState({ fade3: !this.state.fade3 })
  }

  cardFourState = () => {
    this.setState({ fade4: !this.state.fade4 })
  }

  cardFiveState = () => {
    this.setState({ fade5: !this.state.fade5 })
  }

  cardSixState = () => {
    this.setState({ fade6: !this.state.fade6 })
  }
}

export default App;
