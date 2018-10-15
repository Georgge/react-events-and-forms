import React, { Component } from 'react';
import Forms from './Forms/Forms';

class App extends Component {
  constructor () {
    super();
    this.state = { mouseX: 0, mouseY: 0};
  }
  handleClick (e) {
    console.log(e.nativeEvent);
    console.log('Hi Handle!')
  }
  handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    this.setState({ mouseX: clientX, mouseY: clientY});
  }
  render() {
    return (
      <div>
        <h4>Events:</h4>
        <button onClick={() => console.log('Hi!')}>Click here!</button>
        <h4>Synthetic Events</h4>
        <button onClick={this.handleClick}>Handle Click</button>
        <h4>Mouse events</h4>
        <div 
          style={{
            border: '1px solid grey', margin: 10, padding:10,
          }}
          onMouseMove={this.handleMouseMove}
        >
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
        <h4>Forms</h4>
        <Forms />
      </div>
    );
  }
}

export default App;
