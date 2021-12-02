
import { Component } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import { Jumbotron } from 'reactstrap';
import Cards from "./Cards";
import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';
import Accordian from './Components/Accordian';
import './App.css';



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
        <Navbar />
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
        <ImageSlider slides={SliderData}/>
        <Accordian/>
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
