import React from "react";
import '../src/App.css'
import Counter from './components/Counter'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,

    };



    this.decrementCount = this.decrementCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);


  }
  decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
  };

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  };


  render() {
    return (
      <div>
        <h1>Counter</h1>
       <Counter count ={this.state.count} removeFunction = {this.decrementCount} addFunction = {this.incrementCount}></Counter>
      </div>
    )
  }
}





export default App;