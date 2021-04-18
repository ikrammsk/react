import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from './components/Button'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            name: "",
            capital: "",
            flag: "",
            population: "",
            region: ""
        }
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/name/france")
            .then(res => res.json())
            .then(result => {
                console.log(result)

                this.setState({

                    name: result[0].name,
                    capital: result[0].capital,
                    flag: result[0].flag,
                    population: result[0].population,
                    region: result[0].region
                })

            }
            )
    }
    
    buttonRender() {

        return (
            <div>
                <Button onClick={this.getCountry}>France</Button>
                <Button onClick={this.getCountry} >Brazil</Button>
                <Button onClick={this.getCountry} >Croatia</Button>
            </div>
        )
    }


    render() {

        return (

            <div>

                <span> Name : {this.state.name}</span>
                <span> Capital : {this.state.capital}</span>
                <span> Flag : {this.state.flag}</span>
                <span> Population : {this.state.population}</span>
                <span> Region : {this.state.region}</span>

            </div >
        )
    }
}


export default App;
