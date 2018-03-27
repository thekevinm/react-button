import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state = {
    counter: 0,
    label: "Likes"
  }
}
myCounter = () => {
    if(this.state.counter === 0){
    // eslint-disable-next-line
      this.state.label = "Likes" 
    this.setState({ 
      counter: this.state.counter + 1,
      label: "Like"
    })
  } else if (this.state.counter >= 1 ){
    this.setState({
      counter: this.state.counter + 1,
      label: "Likes"
  })
  }
}




  render() {
    return (
      <div className="App">
       <button id="butt" onClick={this.myCounter}>{this.state.counter} {this.state.label}</button>
      </div>
    );
  }
}

export default App;
