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
  }
  render() {

    return (
      <div class="container-fluid">

        <div class="row">

          {/*  Water */}
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L"></Box>



          {/*  Step */}
          <Box icon="directions_walk" color="black" value={3000} unit="step"></Box>



          {/*  Heart */}
          <Box icon="favorite" color="red" value={120} unit="bpm"></Box>



          {/*  Temperature */}

          <Box icon="wb_sunny" color="yellow" value={-10} unit="°C"></Box>



          <p>
            {`Heart : ${heartMin}`}
          </p>

          <p>
            {`Temperature : ${tempMin}`}
          </p>

          <p>
            {`Step : ${stepMin}`}
          </p>


        </div>

      </div>
    );
  }
}

export default App;