
import React from "react";
import './../styles/App.css';
import { Component } from "react";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  onChangeText = (event) => {
    const updateValue = event.target.value;
    this.setState({ value: updateValue });

  }

  render() {
    return (
      <>
      <p>Enter your name: </p>
        <input value={this.state.value} onChange={this.onChangeText} />
        {this.state.value?<p>Hello {this.state.value}! </p> : null} 
      </>
    )
  }
}

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Container />

    </div>
  )
}

export default App
