import React from "react";
import '../src/App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      bgColor: "black"

    };



    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);


  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };


  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2> {this.state.count} </h2>
        <button className='moins' onClick={this.decrement}>-</button>
        <button className='plus' onClick={this.increment}>+</button>
      </div>
    )
  }
}





export default App;