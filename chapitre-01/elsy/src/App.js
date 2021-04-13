import React from "react";
import './App.css';
import Box from './components/Box'
import './styles/global.css'

const tempMin = - 20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepMin = 0
const stepMax = 50000




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,

    };

    this.onHeartChange = this.onHeartChange.bind(this);
    this.onStepChange = this.onStepChange.bind(this);
    this.onTempChange = this.onTempChange.bind(this)
  }


  onHeartChange(e) {
    this.setState({
      heart : e.target.value
    })

  }
  onStepChange(e) {
      this.setState({
      steps : e.target.value
    })

  } 
  onTempChange(e){
    this.setState({
      temperature : e.target.value
    })

  }
  calculateWater(){
    this.setState({
      water : 
    })

  }

  render() {

    return (
      <div class="container-fluid">

        <div class="row">

          {/*  Water */}
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L"></Box>



          {/*  Step */}
          <Box icon="directions_walk" color="black" value={this.state.steps} unit="step" min={stepMin} max={stepMax} onChange={this.onStepChange}></Box>



          {/*  Heart */}
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} onChange={this.onHeartChange}></Box>



          {/*  Temperature */}

          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C"min={tempMin} max={tempMax} onChange={this.onTempChange}></Box>


          {/* 

          <p>
            {`Heart : ${heartMin}`}
          </p>

          <p>
            {`Temperature : ${tempMin}`}
          </p>

          <p>
            {`Step : ${stepMin}`}
          </p> */}


        </div>

      </div>
    );
  }
}

export default App;