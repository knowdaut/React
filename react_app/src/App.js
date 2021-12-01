import { Component } from 'react';
import './App.css';
import Cards from "./Cards";
import { Jumbotron } from 'reactstrap';



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      fade1 : false,
      fade2 : false
    }
  }
  render(){
    let cname = "lead";
    return(
      <div>
        <Jumbotron>
          <h1 className = "display-3">My React App</h1>
          <p className = {cname}> This is my first React App</p>
          <hr className = {"my-2"}/>
          <p className = {cname}></p>
        </Jumbotron>
        <Cards 
          fade1={this.state.fade1} 
          cardOneState = {this.cardOneState}
          fade2={this.state.fade2}
          cardTwoState = {this.cardTwoState}

        />
      </div>
    )
  }
  cardOneState(){
    this.setState({fade1 : !this.state.fade1})
  }
  cardTwoState(){
    this.setState({fade2 : !this.state.fade2})
  }
}

export default App;
