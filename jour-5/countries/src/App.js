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
            })
            .catch(error => console.error(error));
    }



    getCountry(country) {
        // console.log("https://restcountries.eu/rest/v2/name/"+ country)
        fetch("https://restcountries.eu/rest/v2/name/"+ country)
            .then(res => res.json())
            .then(result => {
                console.log(result)

                this.setState({
                    // name: result[0].name,
                    // capital: result[0].capital,
                    // flag: result[0].flag,
                    // population: result[0].population,
                    // region: result[0].region
                })
            })
            .catch(error => console.error(error));
    }


    render() {

        return (

            <div>

                <Button onClick={this.getCountry}>France</Button>
                <Button onClick={this.getCountry}>Brazil</Button>
                <Button onClick={this.getCountry}>Croatia</Button>

                <p> Name : {this.state.name}</p>
                <p> Capital : {this.state.capital}</p>
                <p> Flag : {this.state.flag}</p>
                <p> Population : {this.state.population}</p>
                <p> Region : {this.state.region}</p>
            

            </div >
        )
    }
}


export default App;
